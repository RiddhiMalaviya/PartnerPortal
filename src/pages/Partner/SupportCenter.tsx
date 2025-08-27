import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Headphones, Mail, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Accordion, AccordionItem } from '@heroui/react';

const SupportCenter = () => {
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    subject: '',
    category: '',
    priority: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Generate ticket ID
      const ticketId = `TICKET-${Date.now()}`;

      // Store support request (replace with API call)
      const supportRequests = JSON.parse(localStorage.getItem('supportRequests') || '[]');
      supportRequests.push({
        ...formData,
        ticketId,
        partnerId: currentUser?.id,
        partnerName: currentUser?.name,
        partnerEmail: currentUser?.email,
        status: 'Open',
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('supportRequests', JSON.stringify(supportRequests));

      alert(`Support ticket created successfully! Ticket ID: ${ticketId}`);

      setFormData({ subject: '', category: '', priority: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const recentTickets = [ // Fake support tickets for demo
    { id: 'TICKET-001', subject: 'Lead registration issue', status: 'Resolved', date: '2 days ago' },
    { id: 'TICKET-002', subject: 'Resource download problem', status: 'In Progress', date: '5 days ago' },
    { id: 'TICKET-003', subject: 'Commission inquiry', status: 'Open', date: '1 week ago' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-red-100 text-red-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open': return AlertCircle;
      case 'In Progress': return Clock;
      case 'Resolved': return CheckCircle;
      default: return AlertCircle;
    }
  };

  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="text-sm text-gray-600 mb-3">Get help via email</p>
            <Button variant="outline" size="sm" onClick={() => window.location.href = 'mailto:support@pclnxai.com'}>
              support@pclnxai.com
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Phone className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Phone Support</h3>
            <p className="text-sm text-gray-600 mb-3">Mon-Fri, 9AM-5PM EST</p>
            <Button variant="outline" size="sm" onClick={() => window.location.href = 'tel:+1-800-123-4567'}>
              +1 (800) 123-4567
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Headphones className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600 mb-3">Real-time assistance</p>
            <Button variant="outline" size="sm">
              Start Chat
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Support Form */}
        <Card>
          <CardHeader>
            <CardTitle>Submit Support Request</CardTitle>
            <p className="text-sm text-gray-600">
              Describe your issue and we'll get back to you within 24 hours
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Brief description of your issue"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="account">Account & Billing</SelectItem>
                      <SelectItem value="leads">Lead Management</SelectItem>
                      <SelectItem value="resources">Resources & Downloads</SelectItem>
                      <SelectItem value="training">Training & Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="priority">Priority *</Label>
                  <Select value={formData.priority} onValueChange={(value) => setFormData({ ...formData, priority: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please provide detailed information about your issue..."
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Recent Tickets */}
        <Card>
          <CardHeader>
            <CardTitle>Your Recent Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTickets.map((ticket) => {
                const StatusIcon = getStatusIcon(ticket.status);
                return (
                  <div key={ticket.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <StatusIcon className="h-4 w-4" />
                          <span className="font-medium text-sm">{ticket.id}</span>
                          <Badge className={getStatusColor(ticket.status)}>
                            {ticket.status}
                          </Badge>
                        </div>
                        <p className="text-sm font-medium text-gray-900 mb-1">
                          {ticket.subject}
                        </p>
                        <p className="text-xs text-gray-500">{ticket.date}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {recentTickets.length === 0 && (
                <p className="text-center text-gray-500 py-8">
                  No support tickets yet
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className='ml-4'>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
            <Accordion variant="bordered">
              <AccordionItem key="1" aria-label='How do I register a new lead?' title="How do I register a new lead?">
                <p className="text-md text-gray-600 mb-3">
                  Navigate to the Leads tab in your dashboard and click "Register New Lead". Fill out all required fields and submit.
                </p>
              </AccordionItem>
              <AccordionItem key="2" aria-label="Where can I download sales materials?" title="Where can I download sales materials?">
                <p className="text-md text-gray-600 mb-3">
                  All sales materials are available in the Resources tab. You can filter by category and download materials as needed.
                </p>
              </AccordionItem>
              <AccordionItem key="3" aria-label="How do I track my commissions?" title="How do I track my commissions?">
                <p className="text-md text-gray-600 mb-3">
                  Commission statements are available in the Reports tab. Monthly reports are automatically generated and available for download.
                </p>
              </AccordionItem>
              <AccordionItem key="4" aria-label="What is the response time for support?" title="What is the response time for support?">
                <p className="text-md text-gray-600 mb-3">
                  We aim to respond to all support requests within 24 hours. Urgent issues are prioritized and typically resolved within 4 hours.
                </p>
              </AccordionItem>
            </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportCenter;
