"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  LogOut,
  Album,
  MonitorDown
} from "lucide-react"
import { Logout, Envelope, Cloud } from "@/public/assets/mySvgs"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenuButton
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Course Management",
      url: "#",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "Enrolled Courses",
          url: "#",
        },
        {
          title: "Summer Semester Enrollment",
          url: "#",
        },
      ],
    },
    {
      title: "Grades and Scores",
      url: "#",
      icon: Envelope,
      items: [
        {
          title: "Degree Record",
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      icon: Cloud,
      items: [
        {
          title: "Course Resources",
          url: "#",
        }
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
  logout: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <div className="">
      <Sidebar collapsible="icon" {...props}>
        <SidebarContent>
          <NavMain items={data.navMain} />
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenuButton asChild>
            <a href={"#"}>
              <LogOut />
              <span>{"Logout"}</span>
            </a>
          </SidebarMenuButton>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </div>
  );
}
