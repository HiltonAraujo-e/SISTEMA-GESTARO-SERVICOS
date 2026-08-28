// Quiet Luxury Ritual reminder: this context keeps simulated system state calm, explicit, and replaceable by future API calls.
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";
import {
  availableSlots,
  initialAppointments,
  spaServices,
  type Appointment,
  type AppointmentStatus,
  type SpaService,
  type UserRole,
} from "@/services/mockData";

const defaultClient = { id: "client-1", name: "Marta Silva", email: "marta@email.pt", phone: "123456789", clientEmail: "marta@email.pt", clientPhone: "123456789" };

type AppContextValue = {
  role: UserRole;
  client: typeof defaultClient;
  appointments: Appointment[];
  services: SpaService[];
  login: (role: UserRole) => void;
  logout: () => void;
  addAppointment: (appointment: Appointment) => void;
  updateAppointmentStatus: (id: string, status: AppointmentStatus) => void;
  getAvailableSlots: (date: string, serviceId: string) => string[];
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>("client");
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);

  const value = useMemo<AppContextValue>(() => ({
    role,
    client: defaultClient,
    appointments,
    services: spaServices,
    login: (nextRole) => {
      setRole(nextRole);
      toast.success(nextRole === "admin" ? "Sessão de administradora iniciada." : "Sessão de cliente iniciada.");
    },
    logout: () => {
      setRole("client");
      toast.success("Sessão terminada.");
    },
    addAppointment: (appointment) => {
      setAppointments((current) => [appointment, ...current]);
      toast.success("Pedido criado — aguardando aprovação.", { description: "A simulação de pagamento foi concluída." });
    },
    updateAppointmentStatus: (id, status) => {
      setAppointments((current) => current.map((appointment) => appointment.id === id ? { ...appointment, status } : appointment));
      toast.success(status === "Approved" ? "Agendamento aprovado." : "Agendamento rejeitado.");
    },
    getAvailableSlots: (_date, serviceId) => {
      const serviceBusy = appointments.filter((appointment) => appointment.serviceId === serviceId && appointment.status !== "Rejected" && appointment.status !== "Cancelled").map((appointment) => appointment.time);
      return availableSlots.filter((slot) => !serviceBusy.includes(slot));
    },
  }), [appointments, role]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const value = useContext(AppContext);
  if (!value) throw new Error("useApp must be used inside AppProvider");
  return value;
}
