import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Receipt, Plus, CheckCircle, Clock, FileText, DollarSign, TrendingUp, TrendingDown } from "lucide-react";

export default function Accounting() {
  const vouchers = [
    { id: "VCH001", client: "John Anderson", type: "Payment", amount: "$15,000", date: "2024-10-15", status: "Approved", purpose: "Investment Deposit" },
    { id: "VCH002", client: "Sarah Williams", type: "Receipt", amount: "$12,500", date: "2024-10-14", status: "Verified", purpose: "ROI Disbursement" },
    { id: "VCH003", client: "Michael Chen", type: "Payment", amount: "$25,000", date: "2024-10-13", status: "Pending", purpose: "Capital Inflow" },
    { id: "VCH004", client: "Emma Davis", type: "Receipt", amount: "$8,750", date: "2024-10-12", status: "Approved", purpose: "Interest Payment" },
  ];

  const ledgerEntries = [
    { account: "Cash", debit: "$45,000", credit: "-", balance: "$45,000", date: "2024-10-15" },
    { account: "Investments Receivable", debit: "$150,000", credit: "-", balance: "$195,000", date: "2024-10-15" },
    { account: "ROI Payable", debit: "-", credit: "$21,250", balance: "$21,250", date: "2024-10-14" },
    { account: "Capital Account", debit: "-", credit: "$170,000", balance: "$170,000", date: "2024-10-13" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Accounting & Financial Management</h1>
            <p className="text-muted-foreground mt-1">Manage vouchers, ledgers, and financial records</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Entry
          </Button>
        </div>

        {/* Financial Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                <span className="text-2xl font-bold">$2.4M</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Liabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-destructive" />
                <span className="text-2xl font-bold">$580K</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Net Equity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold">$1.82M</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Receipt className="h-5 w-5 text-accent" />
                <span className="text-2xl font-bold">$145K</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="vouchers" className="space-y-6">
          <TabsList>
            <TabsTrigger value="vouchers">Vouchers</TabsTrigger>
            <TabsTrigger value="ledger">General Ledger</TabsTrigger>
            <TabsTrigger value="journal">Journal Entries</TabsTrigger>
            <TabsTrigger value="accounts">Chart of Accounts</TabsTrigger>
          </TabsList>

          <TabsContent value="vouchers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-5 w-5" />
                  All Vouchers
                </CardTitle>
                <CardDescription>Record and summary of all payment and receipt vouchers</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Voucher ID</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vouchers.map((voucher) => (
                      <TableRow key={voucher.id}>
                        <TableCell className="font-medium">{voucher.id}</TableCell>
                        <TableCell>{voucher.client}</TableCell>
                        <TableCell>
                          <Badge variant={voucher.type === "Payment" ? "default" : "secondary"}>
                            {voucher.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-semibold">{voucher.amount}</TableCell>
                        <TableCell>{voucher.date}</TableCell>
                        <TableCell>{voucher.purpose}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={voucher.status === "Approved" ? "default" : voucher.status === "Pending" ? "secondary" : "outline"}
                            className="gap-1"
                          >
                            {voucher.status === "Approved" && <CheckCircle className="h-3 w-3" />}
                            {voucher.status === "Pending" && <Clock className="h-3 w-3" />}
                            {voucher.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ledger" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  General Ledger
                </CardTitle>
                <CardDescription>Complete record of all financial transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Account</TableHead>
                      <TableHead>Debit</TableHead>
                      <TableHead>Credit</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ledgerEntries.map((entry, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{entry.account}</TableCell>
                        <TableCell className="text-success">{entry.debit}</TableCell>
                        <TableCell className="text-destructive">{entry.credit}</TableCell>
                        <TableCell className="font-semibold">{entry.balance}</TableCell>
                        <TableCell>{entry.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="journal" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Journal Entries</CardTitle>
                <CardDescription>Chronological record of all transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">Journal entries will be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accounts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Chart of Accounts</CardTitle>
                <CardDescription>Organized list of all accounts - Assets, Liabilities, Equity, Income, Expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">Chart of accounts will be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}