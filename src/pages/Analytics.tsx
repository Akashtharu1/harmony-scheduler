import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Users, DoorOpen } from 'lucide-react';

export default function Analytics() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Analytics & Reports</h2>
          <p className="text-sm text-muted-foreground">
            Insights and metrics for timetable optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                <DoorOpen className="w-4 h-4" />
                Room Utilization
              </CardDescription>
              <CardTitle className="text-3xl">78%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-success">
                <TrendingUp className="w-4 h-4" />
                <span>+5% from last week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Avg Faculty Load
              </CardDescription>
              <CardTitle className="text-3xl">18h</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Out of 20h max</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Idle Time Slots</CardDescription>
              <CardTitle className="text-3xl">12</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-success">
                <TrendingDown className="w-4 h-4" />
                <span>-3 from last week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Conflict Resolution</CardDescription>
              <CardTitle className="text-3xl">100%</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="success">All Resolved</Badge>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Room Utilization by Building</CardTitle>
              <CardDescription>Percentage of time rooms are occupied</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Main Block</span>
                  <span className="text-muted-foreground">85%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Tech Block</span>
                  <span className="text-muted-foreground">72%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: '72%' }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Science Block</span>
                  <span className="text-muted-foreground">68%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: '68%' }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Faculty Workload Distribution</CardTitle>
              <CardDescription>Teaching hours per week</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dr. Smith</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '100%' }} />
                    </div>
                    <span className="text-sm text-muted-foreground">20h</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dr. Johnson</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '90%' }} />
                    </div>
                    <span className="text-sm text-muted-foreground">18h</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dr. Brown</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '95%' }} />
                    </div>
                    <span className="text-sm text-muted-foreground">19h</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dr. Davis</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '80%' }} />
                    </div>
                    <span className="text-sm text-muted-foreground">16h</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Heatmap</CardTitle>
            <CardDescription>Room occupancy throughout the week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12 text-muted-foreground">
              <p>Interactive heatmap visualization coming soon</p>
              <p className="text-sm mt-2">Shows peak usage times and idle periods</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
