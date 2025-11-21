import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Play, Settings2, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

export default function Generate() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const { toast } = useToast();

  const handleGenerate = () => {
    setIsGenerating(true);
    setProgress(0);
    setLogs([]);

    const logMessages = [
      'Initializing AI generator...',
      'Loading constraints and preferences...',
      'Building Graph Neural Network embeddings...',
      'Running Deep Reinforcement Learning agent...',
      'Optimizing with OR-Tools...',
      'Validating solution against hard constraints...',
      'Computing room utilization metrics...',
      'Finalizing timetable...',
      'Generation complete!',
    ];

    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < logMessages.length) {
        setLogs((prev) => [...prev, logMessages[currentLog]]);
        setProgress(((currentLog + 1) / logMessages.length) * 100);
        currentLog++;
      } else {
        clearInterval(interval);
        setIsGenerating(false);
        toast({
          title: 'Timetable Generated Successfully',
          description: 'Your AI-powered timetable is ready for review.',
        });
      }
    }, 800);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">AI Timetable Generator</h2>
          <p className="text-sm text-muted-foreground">
            Configure parameters and generate optimal timetables using GNN + DRL + OR-Tools
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings2 className="w-5 h-5" />
                  Generation Parameters
                </CardTitle>
                <CardDescription>Configure the AI generation settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Department</Label>
                    <Select defaultValue="CSE">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CSE">Computer Science</SelectItem>
                        <SelectItem value="ECE">Electronics</SelectItem>
                        <SelectItem value="ME">Mechanical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Semester</Label>
                    <Select defaultValue="5">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                          <SelectItem key={sem} value={sem.toString()}>
                            Semester {sem}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Generation Method</Label>
                  <Select defaultValue="DRL">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DRL">
                        <div>
                          <p className="font-medium">Deep Reinforcement Learning</p>
                          <p className="text-xs text-muted-foreground">AI-powered optimization (Recommended)</p>
                        </div>
                      </SelectItem>
                      <SelectItem value="GA">
                        <div>
                          <p className="font-medium">Genetic Algorithm</p>
                          <p className="text-xs text-muted-foreground">Fast heuristic approach</p>
                        </div>
                      </SelectItem>
                      <SelectItem value="OR">
                        <div>
                          <p className="font-medium">OR-Tools</p>
                          <p className="text-xs text-muted-foreground">Mathematical optimization</p>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Hard Constraint Penalty</Label>
                      <span className="text-sm text-muted-foreground">10</span>
                    </div>
                    <Slider defaultValue={[10]} max={20} step={1} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Teacher Preference Weight</Label>
                      <span className="text-sm text-muted-foreground">3</span>
                    </div>
                    <Slider defaultValue={[3]} max={10} step={1} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Room Utilization Weight</Label>
                      <span className="text-sm text-muted-foreground">1</span>
                    </div>
                    <Slider defaultValue={[1]} max={10} step={1} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Random Seed (optional)</Label>
                  <Input type="number" placeholder="42" />
                </div>
              </CardContent>
            </Card>

            {isGenerating && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 animate-spin" />
                    Generation in Progress
                  </CardTitle>
                  <CardDescription>AI is generating your timetable...</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress value={progress} className="h-2" />
                  <div className="bg-muted rounded-lg p-4 max-h-64 overflow-auto space-y-2">
                    {logs.map((log, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                        <span className="text-muted-foreground">{log}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Start</CardTitle>
                <CardDescription>Generate with default settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full h-12"
                  size="lg"
                  onClick={handleGenerate}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Clock className="w-5 h-5 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Timetable
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Estimated time: 2-5 minutes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Previous Runs</CardTitle>
                <CardDescription>Recent generation history</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <div>
                    <p className="text-sm font-medium">v2025-11-21-10-45</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">v2025-11-20-14-30</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                  <Badge variant="outline">Archived</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expected Output</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>Zero hard constraint violations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>Optimized room utilization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>Balanced faculty workload</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>Explainable AI decisions</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
