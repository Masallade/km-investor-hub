import { 
  LayoutDashboard, 
  Users, 
  TrendingUp, 
  Receipt, 
  Shield, 
  BarChart3, 
  UserCog,
  FileText,
  Settings
} from "lucide-react";
import { NavLink } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Investors", url: "/investors", icon: Users },
  { title: "Investment Plans", url: "/investment-plans", icon: TrendingUp },
  { title: "Accounting", url: "/accounting", icon: Receipt },
  { title: "KYC & Compliance", url: "/kyc", icon: Shield },
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Employees", url: "/employees", icon: UserCog },
  { title: "Agreements", url: "/agreements", icon: FileText },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent>
        <div className="px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-lg">KM</span>
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-bold text-sidebar-foreground text-sm">KM-USTAWANA</h2>
                <p className="text-xs text-sidebar-foreground/60">Investment Platform</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-smooth ${
                          isActive 
                            ? "bg-sidebar-accent text-sidebar-primary font-medium" 
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to="/settings"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-smooth text-sidebar-foreground hover:bg-sidebar-accent/50"
                  >
                    <Settings className="h-5 w-5" />
                    {!collapsed && <span>Settings</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
