import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart3, Download, FileText, TrendingUp, DollarSign, Calendar } from "lucide-react";

export default function Reports() {
  const clientInvestments = [
    { client: "John Anderson", totalInvested: "$150,000", currentValue: "$172,500", roi: "15%", plan: "3-Year", startDate: "2023-01-15" },
    { client: "Sarah Williams", totalInvested: "$200,000", currentValue: "$236,000", roi: "18%", plan: "5-Year", startDate: "2022-06-10" },
    { client: "Michael Chen", totalInvested: "$100,000", currentValue: "$112,000", roi: "12%", plan: "1-Year", startDate: "2024-01-05" },
  ];

  const profitLoss = [
    { period: "October 2024", revenue: "$145,000", expenses: "$42,000", netProfit: "$103,000", margin: "71%" },
    { period: "September 2024", revenue: "$138,000", expenses: "$39,500", netProfit: "$98,500", margin: "71%" },
    { period: "August 2024", revenue: "$152,000", expenses: "$45,000", netProfit: "$107,000", margin: "70%" },
    { period: "Q3 2024", revenue: "$435,000", expenses: "$126,500", netProfit: "$308,500", margin: "71%" },
  ];

  const closingBalance = [
    { account: "Cash", opening: "$250,000", additions: "$145,000", deductions: "$42,000", closing: "$353,000" },
    { account: "Investments", opening: "$2,100,000", additions: "$350,000", deductions: "$0", closing: "$2,450,000" },
    { account: "ROI Payable", opening: "$85,000", additions: "$125,000", deductions: "$95,000", closing: "$115,000" },
    { account: "Total Assets", opening: "$2,435,000", additions: "$620,000", deductions: "$137,000", closing: "$2,918,000" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
            <p className="text-muted-foreground mt-1">Comprehensive financial and operational reports</p>
          </div>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>

        <Tabs defaultValue="client-investments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="client-investments">Client Investments</TabsTrigger>
            <TabsTrigger value="vouchers">Client Vouchers</TabsTrigger>
            <TabsTrigger value="profit-loss">P&L Statement</TabsTrigger>
            <TabsTrigger value="closing-balance">Closing Balance</TabsTrigger>
            <TabsTrigger value="accounts">Account Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="client-investments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Client Investment Report
                </CardTitle>
                <CardDescription>Summary of investments made by each client with date-wise and category-wise tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client Name</TableHead>
                      <TableHead>Total Invested</TableHead>
                      <TableHead>Current Value</TableHead>
                      <TableHead>ROI</TableHead>
                      <TableHead>Investment Plan</TableHead>
                      <TableHead>Start Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clientInvestments.map((investment, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{investment.client}</TableCell>
                        <TableCell>{investment.totalInvested}</TableCell>
                        <TableCell className="font-semibold text-success">{investment.currentValue}</TableCell>
                        <TableCell>
                          <span className="text-success font-semibold">{investment.roi}</span>
                        </TableCell>
                        <TableCell>{investment.plan}</TableCell>
                        <TableCell>{investment.startDate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vouchers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Client Vouchers
                </CardTitle>
                <CardDescription>List of all vouchers issued to clients with date, amount, purpose, and status</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Voucher ID</TableHead>
                      <TableHead>Client Name</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Voucher Date</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">VCH001</TableCell>
                      <TableCell>John Anderson</TableCell>
                      <TableCell>$15,000</TableCell>
                      <TableCell>2024-10-15</TableCell>
                      <TableCell>Investment Deposit</TableCell>
                      <TableCell className="text-success font-medium">Cleared</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">VCH002</TableCell>
                      <TableCell>Sarah Williams</TableCell>
                      <TableCell>$12,500</TableCell>
                      <TableCell>2024-10-14</TableCell>
                      <TableCell>ROI Payment</TableCell>
                      <TableCell className="text-success font-medium">Cleared</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profit-loss" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Profit & Loss Statement
                </CardTitle>
                <CardDescription>Monthly, quarterly, and annual profit & loss with income sources and expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Period</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead>Expenses</TableHead>
                      <TableHead>Net Profit</TableHead>
                      <TableHead>Profit Margin</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {profitLoss.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{record.period}</TableCell>
                        <TableCell className="text-success">{record.revenue}</TableCell>
                        <TableCell className="text-destructive">{record.expenses}</TableCell>
                        <TableCell className="font-semibold text-success">{record.netProfit}</TableCell>
                        <TableCell>{record.margin}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="closing-balance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Closing Balance Report
                </CardTitle>
                <CardDescription>Final balance at the end of period with opening balance, additions, and deductions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Account</TableHead>
                      <TableHead>Opening Balance</TableHead>
                      <TableHead>Additions</TableHead>
                      <TableHead>Deductions</TableHead>
                      <TableHead>Closing Balance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {closingBalance.map((balance, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{balance.account}</TableCell>
                        <TableCell>{balance.opening}</TableCell>
                        <TableCell className="text-success">{balance.additions}</TableCell>
                        <TableCell className="text-destructive">{balance.deductions}</TableCell>
                        <TableCell className="font-semibold">{balance.closing}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accounts" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ledger Reports</CardTitle>
                  <CardDescription>Detailed account ledger with all transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2">
                    <BarChart3 className="h-4 w-4" />
                    View Ledger Report
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Trial Balance</CardTitle>
                  <CardDescription>Statement of all debit and credit balances</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2">
                    <BarChart3 className="h-4 w-4" />
                    View Trial Balance
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cash Flow Statement</CardTitle>
                  <CardDescription>Operating, investing, and financing activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2">
                    <BarChart3 className="h-4 w-4" />
                    View Cash Flow
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Balance Sheet</CardTitle>
                  <CardDescription>Assets, liabilities, and equity summary</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2">
                    <BarChart3 className="h-4 w-4" />
                    View Balance Sheet
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Client Account Summary</CardTitle>
                  <CardDescription>Individual client account statements</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2">
                    <BarChart3 className="h-4 w-4" />
                    View Client Accounts
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}