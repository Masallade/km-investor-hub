import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search, Filter } from "lucide-react";

export default function Investors() {
  const investors = [
    { 
      id: "INV-001", 
      name: "John Anderson", 
      email: "john.anderson@email.com",
      contracts: 3, 
      totalInvestment: "$450,000", 
      status: "Active",
      kyc: "Verified"
    },
    { 
      id: "INV-002", 
      name: "Sarah Williams", 
      email: "sarah.williams@email.com",
      contracts: 2, 
      totalInvestment: "$325,000", 
      status: "Active",
      kyc: "Verified"
    },
    { 
      id: "INV-003", 
      name: "Michael Chen", 
      email: "michael.chen@email.com",
      contracts: 1, 
      totalInvestment: "$200,000", 
      status: "Active",
      kyc: "Pending"
    },
    { 
      id: "INV-004", 
      name: "Emma Davis", 
      email: "emma.davis@email.com",
      contracts: 4, 
      totalInvestment: "$680,000", 
      status: "Active",
      kyc: "Verified"
    },
    { 
      id: "INV-005", 
      name: "Robert Taylor", 
      email: "robert.taylor@email.com",
      contracts: 1, 
      totalInvestment: "$150,000", 
      status: "Inactive",
      kyc: "Verified"
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Investor Management</h1>
            <p className="text-muted-foreground mt-1">Manage investor profiles, contracts, and KYC status</p>
          </div>
          <Button className="bg-gradient-primary shadow-glow">
            <Plus className="h-4 w-4 mr-2" />
            Add Investor
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by name, email, or ID..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Investor ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Contracts</TableHead>
                  <TableHead>Total Investment</TableHead>
                  <TableHead>KYC Status</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {investors.map((investor) => (
                  <TableRow key={investor.id}>
                    <TableCell className="font-medium">{investor.id}</TableCell>
                    <TableCell className="font-medium">{investor.name}</TableCell>
                    <TableCell className="text-muted-foreground">{investor.email}</TableCell>
                    <TableCell>{investor.contracts}</TableCell>
                    <TableCell className="font-semibold">{investor.totalInvestment}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={investor.kyc === "Verified" ? "default" : "secondary"}
                        className={investor.kyc === "Verified" ? "bg-success" : ""}
                      >
                        {investor.kyc}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={investor.status === "Active" ? "default" : "secondary"}
                      >
                        {investor.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">View Details</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
