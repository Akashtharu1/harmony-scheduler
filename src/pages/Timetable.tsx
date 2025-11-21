import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { TimetableGrid } from '@/components/timetable/TimetableGrid';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScheduledSlot } from '@/types';
import { Download, Filter, Grid3x3, List, Calendar } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Mock data
const mockSlots: ScheduledSlot[] = [
  {
    id: '1',
    courseId: 'c1',
    courseName: 'Data Structures',
    courseCode: 'CS201',
    facultyId: 'f1',
    facultyName: 'Dr. Smith',
    roomId: 'r1',
    roomCode: 'R101',
    day: 'Mon',
    startTime: '09:00',
    endTime: '09:50',
    status: 'ok',
  },
  {
    id: '2',
    courseId: 'c2',
    courseName: 'Database Systems',
    courseCode: 'CS202',
    facultyId: 'f2',
    facultyName: 'Dr. Johnson',
    roomId: 'r2',
    roomCode: 'R102',
    day: 'Mon',
    startTime: '10:00',
    endTime: '10:50',
    status: 'ok',
  },
  {
    id: '3',
    courseId: 'c3',
    courseName: 'AI & ML',
    courseCode: 'CS301',
    facultyId: 'f3',
    facultyName: 'Dr. Brown',
    roomId: 'r1',
    roomCode: 'R101',
    day: 'Tue',
    startTime: '09:00',
    endTime: '09:50',
    status: 'ok',
  },
  {
    id: '4',
    courseId: 'c4',
    courseName: 'Computer Networks',
    courseCode: 'CS203',
    facultyId: 'f1',
    facultyName: 'Dr. Smith',
    roomId: 'r3',
    roomCode: 'R103',
    day: 'Wed',
    startTime: '11:00',
    endTime: '11:50',
    status: 'ok',
  },
  {
    id: '5',
    courseId: 'c5',
    courseName: 'Operating Systems',
    courseCode: 'CS204',
    facultyId: 'f4',
    facultyName: 'Dr. Davis',
    roomId: 'r2',
    roomCode: 'R102',
    day: 'Thu',
    startTime: '14:00',
    endTime: '14:50',
    status: 'warning',
  },
];

export default function Timetable() {
  const [selectedSlot, setSelectedSlot] = useState<ScheduledSlot | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Timetable Viewer</h2>
            <p className="text-sm text-muted-foreground">CSE Department • Semester 5 • Week View</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-secondary rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid3x3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Classes</CardDescription>
              <CardTitle className="text-2xl">42</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Conflicts</CardDescription>
              <CardTitle className="text-2xl flex items-center gap-2">
                0
                <Badge variant="success" className="text-xs">All Clear</Badge>
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Room Utilization</CardDescription>
              <CardTitle className="text-2xl">78%</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Faculty Load</CardDescription>
              <CardTitle className="text-2xl">Balanced</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Weekly Schedule</CardTitle>
                <CardDescription>Click on any slot to view details</CardDescription>
              </div>
              <Badge variant="outline" className="gap-2">
                <Calendar className="w-3 h-3" />
                Week of Nov 21, 2025
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {viewMode === 'grid' ? (
              <TimetableGrid slots={mockSlots} onSlotClick={setSelectedSlot} />
            ) : (
              <div className="space-y-3">
                {mockSlots.map((slot) => (
                  <Card
                    key={slot.id}
                    className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setSelectedSlot(slot)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <p className="font-semibold">{slot.courseCode} - {slot.courseName}</p>
                          {slot.status === 'warning' && <Badge variant="warning">Warning</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {slot.day} • {slot.startTime}-{slot.endTime} • {slot.facultyName} • {slot.roomCode}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Dialog open={!!selectedSlot} onOpenChange={() => setSelectedSlot(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedSlot?.courseCode} - {selectedSlot?.courseName}</DialogTitle>
            <DialogDescription>Slot details and information</DialogDescription>
          </DialogHeader>
          {selectedSlot && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Day & Time</p>
                  <p className="font-medium">{selectedSlot.day}, {selectedSlot.startTime}-{selectedSlot.endTime}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Faculty</p>
                  <p className="font-medium">{selectedSlot.facultyName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Room</p>
                  <p className="font-medium">{selectedSlot.roomCode}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge variant={selectedSlot.status === 'ok' ? 'success' : 'warning'}>
                    {selectedSlot.status}
                  </Badge>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
