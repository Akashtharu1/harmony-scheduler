import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Layout } from '@/components/layout/Layout';
import { Calendar, Clock, Users, BookOpen, AlertCircle, CheckCircle2, Sparkles, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();

  const AdminDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Faculty</CardDescription>
            <CardTitle className="text-3xl">24</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>Across 3 departments</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Active Courses</CardDescription>
            <CardTitle className="text-3xl">42</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="w-4 h-4" />
              <span>Current semester</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Room Utilization</CardDescription>
            <CardTitle className="text-3xl">78%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-success">
              <CheckCircle2 className="w-4 h-4" />
              <span>Optimal usage</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Conflicts</CardDescription>
            <CardTitle className="text-3xl">2</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-warning">
              <AlertCircle className="w-4 h-4" />
              <span>Needs attention</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks for administrators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link to="/generate">
              <Button className="w-full justify-start" size="lg">
                <Sparkles className="w-5 h-5 mr-3" />
                Generate New Timetable
              </Button>
            </Link>
            <Link to="/timetable">
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Calendar className="w-5 h-5 mr-3" />
                View Current Timetable
              </Button>
            </Link>
            <Link to="/analytics">
              <Button variant="outline" className="w-full justify-start" size="lg">
                <BarChart3 className="w-5 h-5 mr-3" />
                View Analytics
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system events</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 pb-3 border-b border-border">
              <div className="w-2 h-2 rounded-full bg-success mt-2" />
              <div className="flex-1">
                <p className="text-sm font-medium">Timetable Generated</p>
                <p className="text-xs text-muted-foreground">CSE Dept, Semester 5 • 2 hours ago</p>
              </div>
              <Badge variant="success">Success</Badge>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-border">
              <div className="w-2 h-2 rounded-full bg-info mt-2" />
              <div className="flex-1">
                <p className="text-sm font-medium">Faculty Added</p>
                <p className="text-xs text-muted-foreground">Dr. Sarah Johnson • 5 hours ago</p>
              </div>
              <Badge>New</Badge>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-warning mt-2" />
              <div className="flex-1">
                <p className="text-sm font-medium">Room Conflict Resolved</p>
                <p className="text-xs text-muted-foreground">Room 301, Monday 10:00 AM • 1 day ago</p>
              </div>
              <Badge variant="warning">Resolved</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Semester Status</CardTitle>
          <CardDescription>Overview of Semester 5 timetable</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Timetable Version</span>
              <span className="text-sm font-medium">v2025-11-21-active</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Last Updated</span>
              <span className="text-sm font-medium">Today, 10:45 AM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Status</span>
              <Badge variant="success">Active</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const FacultyDashboard = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome back, {user?.name}!</CardTitle>
          <CardDescription>Your schedule for this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-secondary rounded-lg">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">18 hours scheduled</p>
                <p className="text-sm text-muted-foreground">Out of 20 max hours</p>
              </div>
            </div>
            <Link to="/timetable">
              <Button className="w-full">View Full Timetable</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const StudentDashboard = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {user?.name}!</CardTitle>
          <CardDescription>Your personalized class schedule</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-secondary rounded-lg">
              <BookOpen className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">6 courses enrolled</p>
                <p className="text-sm text-muted-foreground">Semester 5</p>
              </div>
            </div>
            <Link to="/timetable">
              <Button className="w-full">View My Timetable</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <Layout>
      {user?.role === 'admin' && <AdminDashboard />}
      {user?.role === 'faculty' && <FacultyDashboard />}
      {user?.role === 'student' && <StudentDashboard />}
    </Layout>
  );
}
