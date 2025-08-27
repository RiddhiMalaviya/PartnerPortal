// src/components/partner/PayoutReports.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const PayoutReports = () => {
  const reports = [
    { title: 'August 2025 Commission Statement', date: 'Aug 31, 2025', amount: '$2,450', status: 'Paid' },
    { title: 'July 2025 Commission Statement', date: 'Jul 31, 2025', amount: '$1,890', status: 'Paid' },
    { title: 'June 2025 Commission Statement', date: 'Jun 30, 2025', amount: '$3,220', status: 'Paid' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payout Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <FileText className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">{report.title}</h3>
                  <p className="text-sm text-gray-600">{report.date} • {report.amount}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  {report.status}
                </span>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PayoutReports;
