import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScheduledSlot } from '@/types';
import { Clock, MapPin, User, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimetableGridProps {
  slots: ScheduledSlot[];
  onSlotClick?: (slot: ScheduledSlot) => void;
}

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const TIME_SLOTS = [
  '09:00-09:50',
  '10:00-10:50',
  '11:00-11:50',
  '12:00-12:50',
  '14:00-14:50',
  '15:00-15:50',
  '16:00-16:50',
];

export const TimetableGrid = ({ slots, onSlotClick }: TimetableGridProps) => {
  const getSlotForCell = (day: string, time: string) => {
    return slots.find(
      (slot) => slot.day === day && slot.startTime === time.split('-')[0]
    );
  };

  return (
    <div className="overflow-auto">
      <div className="min-w-[900px]">
        {/* Header */}
        <div className="grid grid-cols-8 gap-2 mb-2">
          <div className="p-3 font-semibold text-sm text-muted-foreground">Time</div>
          {DAYS.map((day) => (
            <div key={day} className="p-3 font-semibold text-sm text-center bg-secondary rounded-lg">
              {day}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="space-y-2">
          {TIME_SLOTS.map((timeSlot) => (
            <div key={timeSlot} className="grid grid-cols-8 gap-2">
              <div className="p-3 text-sm font-medium text-muted-foreground flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {timeSlot}
              </div>
              {DAYS.map((day) => {
                const slot = getSlotForCell(day, timeSlot);
                return (
                  <div key={`${day}-${timeSlot}`} className="min-h-[100px]">
                    {slot ? (
                      <Card
                        className={cn(
                          'p-3 h-full cursor-pointer transition-all hover:shadow-md',
                          slot.status === 'conflict' && 'border-conflict bg-conflict-light',
                          slot.status === 'warning' && 'border-warning/50 bg-warning/5',
                          slot.status === 'ok' && 'border-primary/20 hover:border-primary/40'
                        )}
                        onClick={() => onSlotClick?.(slot)}
                      >
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <div className="font-semibold text-sm leading-tight line-clamp-1">
                              {slot.courseCode}
                            </div>
                            {slot.status === 'conflict' && (
                              <Badge variant="conflict" className="text-xs">
                                <AlertCircle className="w-3 h-3" />
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {slot.courseName}
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <User className="w-3 h-3" />
                              <span className="truncate">{slot.facultyName}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3" />
                              <span>{slot.roomCode}</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ) : (
                      <Card className="p-3 h-full bg-muted/30 border-dashed" />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
