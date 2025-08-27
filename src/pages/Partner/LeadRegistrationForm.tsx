// src/components/partner/LeadRegistrationForm.tsx
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const LeadRegistrationForm = () => {
  const [leadData, setLeadData] = useState({
    companyName: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    opportunityDetails: '',
    estimatedValue: '',
    expectedCloseDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate Lead ID
    const leadId = `LEAD_${Date.now()}`;
    
    // Store in localStorage (replace with API call)
    const leads = JSON.parse(localStorage.getItem('partnerLeads') || '[]');
    leads.push({ ...leadData, leadId, status: 'New', createdAt: new Date().toISOString() });
    localStorage.setItem('partnerLeads', JSON.stringify(leads));
    
    alert(`Lead registered successfully! Lead ID: ${leadId}`);
    
    // Reset form
    setLeadData({
      companyName: '', contactName: '', contactEmail: '',
      contactPhone: '', opportunityDetails: '', estimatedValue: '', expectedCloseDate: ''
    });
  };

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Register New Lead</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={leadData.companyName}
                  onChange={(e) => setLeadData({...leadData, companyName: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="contactName">Contact Name *</Label>
                <Input
                  id="contactName"
                  value={leadData.contactName}
                  onChange={(e) => setLeadData({...leadData, contactName: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="contactEmail">Contact Email *</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={leadData.contactEmail}
                  onChange={(e) => setLeadData({...leadData, contactEmail: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="contactPhone">Contact Phone</Label>
                <Input
                  id="contactPhone"
                  value={leadData.contactPhone}
                  onChange={(e) => setLeadData({...leadData, contactPhone: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="opportunityDetails">Opportunity Details *</Label>
              <Textarea
                id="opportunityDetails"
                value={leadData.opportunityDetails}
                onChange={(e) => setLeadData({...leadData, opportunityDetails: e.target.value})}
                required
                rows={3}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="estimatedValue">Estimated Value ($)</Label>
                <Input
                  id="estimatedValue"
                  type="number"
                  value={leadData.estimatedValue}
                  onChange={(e) => setLeadData({...leadData, estimatedValue: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="expectedCloseDate">Expected Close Date</Label>
                <Input
                  id="expectedCloseDate"
                  type="date"
                  value={leadData.expectedCloseDate}
                  onChange={(e) => setLeadData({...leadData, expectedCloseDate: e.target.value})}
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full">
              Register Lead
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Your Leads List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Recent Leads</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add leads list here */}
          <p className="text-gray-600">Your submitted leads will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadRegistrationForm;
