import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Room } from '@/types';
import { Plus, Search, Edit, Trash2, DoorOpen, Users } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const mockRooms: Room[] = [
  {
    id: 'r1',
    code: 'R101',
    name: 'Lecture Hall 1',
    building: 'Main Block',
    capacity: 60,
    type: 'lecture',
    facilities: ['Projector', 'AC', 'Whiteboard'],
  },
  {
    id: 'r2',
    code: 'R102',
    name: 'Lecture Hall 2',
    building: 'Main Block',
    capacity: 80,
    type: 'lecture',
    facilities: ['Projector', 'AC', 'Whiteboard', 'Smart Board'],
  },
  {
    id: 'r3',
    code: 'L201',
    name: 'Computer Lab 1',
    building: 'Tech Block',
    capacity: 40,
    type: 'lab',
    facilities: ['Computers', 'AC', 'Projector'],
  },
  {
    id: 'r4',
    code: 'R103',
    name: 'Tutorial Room 1',
    building: 'Main Block',
    capacity: 30,
    type: 'tutorial',
    facilities: ['Whiteboard', 'AC'],
  },
];

export default function Rooms() {
  const [searchQuery, setSearchQuery] = useState('');
  const [rooms] = useState<Room[]>(mockRooms);

  const filteredRooms = rooms.filter(
    (r) =>
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Room Management</h2>
            <p className="text-sm text-muted-foreground">Manage rooms and facilities</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Room
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Rooms</CardDescription>
              <CardTitle className="text-2xl">{rooms.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Lecture Halls</CardDescription>
              <CardTitle className="text-2xl">
                {rooms.filter((r) => r.type === 'lecture').length}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Labs</CardDescription>
              <CardTitle className="text-2xl">
                {rooms.filter((r) => r.type === 'lab').length}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Avg Capacity</CardDescription>
              <CardTitle className="text-2xl">53</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Room List</CardTitle>
                <CardDescription>All rooms and facilities</CardDescription>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search rooms..."
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
                  <TableHead>Name</TableHead>
                  <TableHead>Building</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Facilities</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRooms.map((room) => (
                  <TableRow key={room.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <DoorOpen className="w-4 h-4 text-accent" />
                        <span className="font-medium">{room.code}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{room.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{room.building}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={room.type === 'lab' ? 'secondary' : 'outline'}
                        className="capitalize"
                      >
                        {room.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        {room.capacity}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1 flex-wrap">
                        {room.facilities.slice(0, 2).map((facility, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {facility}
                          </Badge>
                        ))}
                        {room.facilities.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{room.facilities.length - 2}
                          </Badge>
                        )}
                      </div>
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
