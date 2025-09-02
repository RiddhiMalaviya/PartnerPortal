// src/pages/partner/LeadRegistrationForm.tsx
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
    <div className="grid gap-4 sm:gap-6 px-4 sm:px-0">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Register New Lead</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <Label htmlFor="companyName" className="text-sm sm:text-base">Company Name *</Label>
                <Input
                  id="companyName"
                  value={leadData.companyName}
                  onChange={(e) => setLeadData({...leadData, companyName: e.target.value})}
                  required
                  className="text-sm sm:text-base py-2 sm:py-2.5"
                />
              </div>
              <div>
                <Label htmlFor="contactName" className="text-sm sm:text-base">Contact Name *</Label>
                <Input
                  id="contactName"
                  value={leadData.contactName}
                  onChange={(e) => setLeadData({...leadData, contactName: e.target.value})}
                  required
                  className="text-sm sm:text-base py-2 sm:py-2.5"
                />
              </div>
              <div>
                <Label htmlFor="contactEmail" className="text-sm sm:text-base">Contact Email *</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={leadData.contactEmail}
                  onChange={(e) => setLeadData({...leadData, contactEmail: e.target.value})}
                  required
                  className="text-sm sm:text-base py-2 sm:py-2.5"
                />
              </div>
              <div>
                <Label htmlFor="contactPhone" className="text-sm sm:text-base">Contact Phone</Label>
                <Input
                  id="contactPhone"
                  value={leadData.contactPhone}
                  onChange={(e) => setLeadData({...leadData, contactPhone: e.target.value})}
                  className="text-sm sm:text-base py-2 sm:py-2.5"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="opportunityDetails" className="text-sm sm:text-base">Opportunity Details *</Label>
              <Textarea
                id="opportunityDetails"
                value={leadData.opportunityDetails}
                onChange={(e) => setLeadData({...leadData, opportunityDetails: e.target.value})}
                required
                className="text-sm sm:text-base py-2 sm:py-2.5"
                rows={3}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="estimatedValue" className="text-sm sm:text-base">Estimated Value ($)</Label>
                <Input
                  id="estimatedValue"
                  type="number"
                  value={leadData.estimatedValue}
                  onChange={(e) => setLeadData({...leadData, estimatedValue: e.target.value})}
                  className="text-sm sm:text-base py-2 sm:py-2.5"
                />
              </div>
              <div>
                <Label htmlFor="expectedCloseDate" className="text-sm sm:text-base">Expected Close Date</Label>
                <Input
                  id="expectedCloseDate"
                  type="date"
                  value={leadData.expectedCloseDate}
                  onChange={(e) => setLeadData({...leadData, expectedCloseDate: e.target.value})}
                  className="text-sm sm:text-base py-2 sm:py-2.5"
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full text-sm sm:text-base py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700">
              Register Lead
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Your Leads List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Your Recent Leads</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add leads list here */}
          <p className="text-gray-600 text-sm sm:text-base">Your submitted leads will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadRegistrationForm;
