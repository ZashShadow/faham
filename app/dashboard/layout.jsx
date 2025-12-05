import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import TopBar from "@/myComponents/TopBar"
import Foot from "@/myComponents/Footer"


export default function DashboardLayout({ children }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <TopBar className={"mb-1"}/>
                {children}
                <Foot/>
            </SidebarInset>
        </SidebarProvider>
    );
}
