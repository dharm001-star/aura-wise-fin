import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Wallet, PiggyBank, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const userMode = localStorage.getItem("userMode") || "regular";

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Financial Overview</h1>
          <p className="text-muted-foreground">
            Mode: <span className="font-medium capitalize">{userMode === "gig" ? "Gig Worker" : "Regular User"}</span>
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
          Connect Account
        </Button>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-success">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Income</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,250.00</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-success">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-destructive">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <ArrowDownRight className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,120.00</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-destructive">+8.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings</CardTitle>
            <PiggyBank className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450.00</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-success">+5.4%</span> growth this month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-accent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
            <Wallet className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,130.00</div>
            <p className="text-xs text-muted-foreground mt-1">
              Ready to spend
            </p>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-primary" />
              AI Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-success/10 border border-success/20">
              <p className="text-sm font-medium flex items-start">
                <span className="text-success mr-2">✓</span>
                Your spending is under control this month. Keep it up!
              </p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-sm font-medium flex items-start">
                <span className="text-accent mr-2">💡</span>
                Consider moving $200 to savings based on your income pattern.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <p className="text-sm font-medium flex items-start">
                <AlertCircle className="h-4 w-4 text-destructive mr-2 mt-0.5" />
                Higher than usual dining expenses detected this week.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Budget Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Housing</span>
                <span className="text-muted-foreground">$1,200 / $1,200</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Food & Dining</span>
                <span className="text-muted-foreground">$420 / $500</span>
              </div>
              <Progress value={84} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Transportation</span>
                <span className="text-muted-foreground">$180 / $300</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Entertainment</span>
                <span className="text-muted-foreground">$95 / $200</span>
              </div>
              <Progress value={47.5} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Grocery Store", amount: -85.32, date: "Today", category: "Food" },
              { name: "Freelance Project", amount: 1250.0, date: "Yesterday", category: "Income" },
              { name: "Electric Bill", amount: -120.0, date: "2 days ago", category: "Utilities" },
              { name: "Coffee Shop", amount: -12.5, date: "3 days ago", category: "Dining" },
              { name: "Transfer to Savings", amount: -200.0, date: "4 days ago", category: "Savings" },
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${transaction.amount > 0 ? "bg-success/10" : "bg-muted"}`}>
                    <Wallet className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.name}</p>
                    <p className="text-sm text-muted-foreground">{transaction.category} • {transaction.date}</p>
                  </div>
                </div>
                <span className={`font-semibold ${transaction.amount > 0 ? "text-success" : ""}`}>
                  {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
