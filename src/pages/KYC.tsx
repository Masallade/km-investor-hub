import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, CheckCircle, Clock, AlertCircle, Upload, FileText, Eye } from "lucide-react";

export default function KYC() {
  const kycRecords = [
    { id: "KYC001", investor: "John Anderson", status: "Approved", documents: 4, submittedDate: "2024-09-15", verifiedDate: "2024-09-18" },
    { id: "KYC002", investor: "Sarah Williams", status: "Pending", documents: 3, submittedDate: "2024-10-10", verifiedDate: "-" },
    { id: "KYC003", investor: "Michael Chen", status: "Approved", documents: 5, submittedDate: "2024-08-20", verifiedDate: "2024-08-23" },
    { id: "KYC004", investor: "Emma Davis", status: "Under Review", documents: 4, submittedDate: "2024-10-12", verifiedDate: "-" },
    { id: "KYC005", investor: "David Wilson", status: "Rejected", documents: 2, submittedDate: "2024-10-08", verifiedDate: "2024-10-10" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return <Badge className="bg-success text-success-foreground gap-1"><CheckCircle className="h-3 w-3" />Approved</Badge>;
      case "Pending":
        return <Badge variant="secondary" className="gap-1"><Clock className="h-3 w-3" />Pending</Badge>;
      case "Under Review":
        return <Badge className="bg-accent text-accent-foreground gap-1"><AlertCircle className="h-3 w-3" />Under Review</Badge>;
      case "Rejected":
        return <Badge variant="destructive" className="gap-1"><AlertCircle className="h-3 w-3" />Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">KYC & Compliance</h1>
            <p className="text-muted-foreground mt-1">Manage investor verification and compliance documents</p>
          </div>
          <Button className="gap-2">
            <Upload className="h-4 w-4" />
            Upload Documents
          </Button>
        </div>

        {/* KYC Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Approved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-2xl font-bold text-success">1,180</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Review</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-2xl font-bold text-accent">45</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Rejected</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <span className="text-2xl font-bold text-destructive">23</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* KYC Records Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              KYC Verification Records
            </CardTitle>
            <CardDescription>Identity verification and compliance documentation for all investors</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>KYC ID</TableHead>
                  <TableHead>Investor Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Documents</TableHead>
                  <TableHead>Submitted Date</TableHead>
                  <TableHead>Verified Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {kycRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="font-medium">{record.id}</TableCell>
                    <TableCell>{record.investor}</TableCell>
                    <TableCell>{getStatusBadge(record.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>{record.documents}</span>
                      </div>
                    </TableCell>
                    <TableCell>{record.submittedDate}</TableCell>
                    <TableCell>{record.verifiedDate}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Compliance Audit Trail */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance Audit Trail</CardTitle>
            <CardDescription>Complete history of verification activities and compliance checks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { action: "KYC Approved", user: "Admin", investor: "John Anderson", timestamp: "2024-10-15 14:30" },
                { action: "Documents Uploaded", user: "Sarah Williams", investor: "Sarah Williams", timestamp: "2024-10-15 12:15" },
                { action: "Verification Started", user: "Admin", investor: "Emma Davis", timestamp: "2024-10-14 16:45" },
                { action: "KYC Rejected", user: "Compliance Officer", investor: "David Wilson", timestamp: "2024-10-14 10:20" },
              ].map((log, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{log.action}</p>
                      <p className="text-sm text-muted-foreground">
                        {log.investor} • By {log.user}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{log.timestamp}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}