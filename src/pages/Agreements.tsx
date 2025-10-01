import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Plus, Download, Eye, AlertCircle, CheckCircle, Clock } from "lucide-react";

export default function Agreements() {
  const agreements = [
    { 
      id: "AGR001", 
      client: "John Anderson", 
      type: "Investment Agreement", 
      amount: "$150,000",
      startDate: "2023-01-15",
      endDate: "2026-01-15",
      status: "Active",
      attachments: 3,
      daysToExpiry: 456
    },
    { 
      id: "AGR002", 
      client: "Sarah Williams", 
      type: "Investment Agreement", 
      amount: "$200,000",
      startDate: "2022-06-10",
      endDate: "2027-06-10",
      status: "Active",
      attachments: 4,
      daysToExpiry: 911
    },
    { 
      id: "AGR003", 
      client: "Michael Chen", 
      type: "Investment Agreement", 
      amount: "$100,000",
      startDate: "2024-01-05",
      endDate: "2025-01-05",
      status: "Expiring Soon",
      attachments: 2,
      daysToExpiry: 72
    },
    { 
      id: "AGR004", 
      client: "Emma Davis", 
      type: "Investment Agreement", 
      amount: "$175,000",
      startDate: "2023-09-20",
      endDate: "2026-09-20",
      status: "Active",
      attachments: 3,
      daysToExpiry: 689
    },
    { 
      id: "AGR005", 
      client: "David Wilson", 
      type: "Service Agreement", 
      amount: "$50,000",
      startDate: "2024-03-01",
      endDate: "2024-12-31",
      status: "Pending Renewal",
      attachments: 2,
      daysToExpiry: 15
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-success text-success-foreground gap-1"><CheckCircle className="h-3 w-3" />Active</Badge>;
      case "Expiring Soon":
        return <Badge className="bg-accent text-accent-foreground gap-1"><Clock className="h-3 w-3" />Expiring Soon</Badge>;
      case "Pending Renewal":
        return <Badge variant="destructive" className="gap-1"><AlertCircle className="h-3 w-3" />Pending Renewal</Badge>;
      case "Expired":
        return <Badge variant="outline" className="gap-1"><AlertCircle className="h-3 w-3" />Expired</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getExpiryWarning = (days: number) => {
    if (days <= 30) return "text-destructive font-semibold";
    if (days <= 90) return "text-accent font-medium";
    return "text-muted-foreground";
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Agreements & Contracts</h1>
            <p className="text-muted-foreground mt-1">Manage investor agreements with contract repository and aging alerts</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Agreement
          </Button>
        </div>

        {/* Agreement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Agreements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">456</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Contracts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-2xl font-bold text-success">398</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Expiring Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-2xl font-bold text-accent">35</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Renewal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <span className="text-2xl font-bold text-destructive">23</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contract Aging Alert */}
        <Card className="border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-5 w-5" />
              Contract Aging Alert
            </CardTitle>
            <CardDescription>Agreements requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-semibold text-destructive">23 contracts</span> are expiring within 30 days and require renewal processing.
              </p>
              <Button variant="destructive" size="sm" className="gap-2">
                <FileText className="h-4 w-4" />
                View Expiring Contracts
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Agreements Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              All Agreements
            </CardTitle>
            <CardDescription>Complete contract repository with multiple contracts per client</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Agreement ID</TableHead>
                  <TableHead>Client Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Days to Expiry</TableHead>
                  <TableHead>Attachments</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agreements.map((agreement) => (
                  <TableRow key={agreement.id}>
                    <TableCell className="font-medium">{agreement.id}</TableCell>
                    <TableCell>{agreement.client}</TableCell>
                    <TableCell>{agreement.type}</TableCell>
                    <TableCell className="font-semibold">{agreement.amount}</TableCell>
                    <TableCell>{agreement.startDate}</TableCell>
                    <TableCell>{agreement.endDate}</TableCell>
                    <TableCell className={getExpiryWarning(agreement.daysToExpiry)}>
                      {agreement.daysToExpiry} days
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>{agreement.attachments}</span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(agreement.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Agreement Types */}
        <Card>
          <CardHeader>
            <CardTitle>Agreement Type Distribution</CardTitle>
            <CardDescription>Breakdown of contracts by type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { type: "Investment Agreement", count: 398, percentage: "87%" },
                { type: "Service Agreement", count: 42, percentage: "9%" },
                { type: "Partnership Agreement", count: 16, percentage: "4%" },
              ].map((item, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground">{item.type}</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <p className="text-2xl font-bold">{item.count}</p>
                    <p className="text-sm text-muted-foreground">({item.percentage})</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}