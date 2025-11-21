import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Course } from '@/types';
import { Plus, Search, Edit, Trash2, BookOpen } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const mockCourses: Course[] = [
  {
    id: 'c1',
    code: 'CS201',
    name: 'Data Structures and Algorithms',
    department: 'CSE',
    semester: 3,
    credits: 4,
    lectureHours: 3,
    labHours: 2,
  },
  {
    id: 'c2',
    code: 'CS202',
    name: 'Database Management Systems',
    department: 'CSE',
    semester: 3,
    credits: 4,
    lectureHours: 3,
    labHours: 2,
  },
  {
    id: 'c3',
    code: 'CS301',
    name: 'Artificial Intelligence & Machine Learning',
    department: 'CSE',
    semester: 5,
    credits: 4,
    lectureHours: 4,
  },
  {
    id: 'c4',
    code: 'CS203',
    name: 'Computer Networks',
    department: 'CSE',
    semester: 4,
    credits: 3,
    lectureHours: 3,
  },
  {
    id: 'c5',
    code: 'CS204',
    name: 'Operating Systems',
    department: 'CSE',
    semester: 4,
    credits: 4,
    lectureHours: 3,
    labHours: 2,
  },
];

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [courses] = useState<Course[]>(mockCourses);

  const filteredCourses = courses.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Course Management</h2>
            <p className="text-sm text-muted-foreground">Manage courses and curriculum</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Course
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Courses</CardDescription>
              <CardTitle className="text-2xl">{courses.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Active Semester</CardDescription>
              <CardTitle className="text-2xl">5</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Credits</CardDescription>
              <CardTitle className="text-2xl">19</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>With Labs</CardDescription>
              <CardTitle className="text-2xl">3</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Course List</CardTitle>
                <CardDescription>All courses across semesters</CardDescription>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search courses..."
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
                  <TableHead>Code</TableHead>
                  <TableHead>Course Name</TableHead>
                  <TableHead>Semester</TableHead>
                  <TableHead>Credits</TableHead>
                  <TableHead>Lecture Hours</TableHead>
                  <TableHead>Lab Hours</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCourses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="font-medium">{course.code}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{course.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">Sem {course.semester}</Badge>
                    </TableCell>
                    <TableCell>{course.credits}</TableCell>
                    <TableCell>{course.lectureHours}h</TableCell>
                    <TableCell>
                      {course.labHours ? (
                        `${course.labHours}h`
                      ) : (
                        <span className="text-muted-foreground">—</span>
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
