import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Faculty as FacultyType } from '@/types';
import { Plus, Search, Edit, Trash2, Mail, Clock } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const mockFaculty: FacultyType[] = [
  {
    id: 'f1',
    name: 'Dr. John Smith',
    email: 'john.smith@university.edu',
    department: 'CSE',
    maxHoursPerWeek: 20,
    preferences: ['Morning slots', 'Monday-Friday'],
  },
  {
    id: 'f2',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@university.edu',
    department: 'CSE',
    maxHoursPerWeek: 18,
    preferences: ['Afternoon slots'],
  },
  {
    id: 'f3',
    name: 'Dr. Michael Brown',
    email: 'michael.brown@university.edu',
    department: 'CSE',
    maxHoursPerWeek: 20,
  },
  {
    id: 'f4',
    name: 'Dr. Emily Davis',
    email: 'emily.davis@university.edu',
    department: 'CSE',
    maxHoursPerWeek: 16,
  },
];

export default function Faculty() {
  const [searchQuery, setSearchQuery] = useState('');
  const [faculty] = useState<FacultyType[]>(mockFaculty);

  const filteredFaculty = faculty.filter(
    (f) =>
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Faculty Management</h2>
            <p className="text-sm text-muted-foreground">Manage faculty profiles and availability</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Faculty
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Faculty</CardDescription>
              <CardTitle className="text-2xl">{faculty.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Active</CardDescription>
              <CardTitle className="text-2xl">{faculty.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Avg Load</CardDescription>
              <CardTitle className="text-2xl">18h</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>On Leave</CardDescription>
              <CardTitle className="text-2xl">0</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Faculty List</CardTitle>
                <CardDescription>All faculty members in CSE department</CardDescription>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search faculty..."
                    className="pl-9 w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Max Hours/Week</TableHead>
                  <TableHead>Preferences</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFaculty.map((f) => (
                  <TableRow key={f.id}>
                    <TableCell className="font-medium">{f.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="w-3 h-3" />
                        {f.email}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{f.department}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {f.maxHoursPerWeek}h
                      </div>
                    </TableCell>
                    <TableCell>
                      {f.preferences ? (
                        <div className="flex gap-1 flex-wrap">
                          {f.preferences.slice(0, 2).map((pref, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {pref}
                            </Badge>
                          ))}
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground">None set</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
