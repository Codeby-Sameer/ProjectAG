import React, { useState } from 'react';

const Financial = () => {
  const [financialData] = useState({
    revenue: 127450,
    outstanding: 23890,
    commissions: 8750,
    collectionRate: 94.2
  });

  const invoiceTemplates = [
    {
      title: '🏠 Real Estate Services',
      description: 'Standard template for property settlement and consultation services',
      items: [
        'Consultation fee: $150/hour',
        'Document preparation: $75/document',
        'Settlement coordination: $500 flat fee',
        'Travel expenses: $0.65/mile'
      ]
    },
    {
      title: '🎬 Film Production',
      description: 'Template for film production support and permit services',
      items: [
        'Permit processing: $200/permit',
        'Location scouting: $300/day',
        'Production coordination: $500/day',
        'Equipment rental: Variable'
      ]
    },
    {
      title: '🎉 Event Services',
      description: 'Template for event planning and management services',
      items: [
        'Event planning: $1000 base fee',
        'Vendor coordination: $150/vendor',
        'Day-of coordination: $400/day',
        'Additional services: Variable'
      ]
    }
  ];

  const commissionTiers = [
    {
      category: '🏠 Real Estate Specialists',
      items: [
        { service: 'Settlement Services', commission: '15%' },
        { service: 'Consultation Services', commission: '20%' },
        { service: 'Document Preparation', commission: '10%' }
      ]
    },
    {
      category: '🎬 Film Production Team',
      items: [
        { service: 'Permit Processing', commission: '12%' },
        { service: 'Location Services', commission: '18%' },
        { service: 'Production Support', commission: '15%' }
      ]
    },
    {
      category: '🎉 Event Coordinators',
      items: [
        { service: 'Event Planning', commission: '20%' },
        { service: 'Vendor Coordination', commission: '15%' },
        { service: 'Day-of Services', commission: '25%' }
      ]
    }
  ];

  const paymentMethods = [
    { icon: '💳', name: 'Credit/Debit Cards' },
    { icon: '🏦', name: 'Bank Transfers' },
    { icon: '📱', name: 'Digital Wallets' },
    { icon: '💰', name: 'Cash Payments' }
  ];

  const commissionTracking = [
    { name: 'Sarah Johnson', amount: 3250, department: 'Real Estate' },
    { name: 'Mike Davis', amount: 2890, department: 'Film Production' },
    { name: 'Lisa Chen', amount: 2610, department: 'Events' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">💰 Financial Management</h2>
        <p className="text-gray-600">Invoice processing, payment tracking, and commission management</p>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            value: `$${financialData.revenue.toLocaleString()}`, 
            label: 'Total Revenue (This Month)',
            change: '+12.5% from last month',
            icon: '💰'
          },
          { 
            value: `$${financialData.outstanding.toLocaleString()}`, 
            label: 'Outstanding Invoices',
            change: '15 invoices pending',
            icon: '📄'
          },
          { 
            value: `$${financialData.commissions.toLocaleString()}`, 
            label: 'Commissions Due',
            change: 'Next payout: Dec 15',
            icon: '💼'
          },
          { 
            value: `${financialData.collectionRate}%`, 
            label: 'Collection Rate',
            change: 'Above target (90%)',
            icon: '📈'
          }
        ].map((metric, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-6 shadow-lg animate-slide-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-3xl font-bold mb-2">{metric.value}</div>
            <div className="text-blue-100 text-sm mb-1">{metric.label}</div>
            <div className="text-blue-200 text-xs">{metric.change}</div>
            <div className="text-2xl mt-3">{metric.icon}</div>
          </div>
        ))}
      </div>

      {/* Invoice Management */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-slide-in-up">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">🧾 Invoice & Payment Processing</h3>
        
        {/* Invoice Templates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {invoiceTemplates.map((template, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{template.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{template.description}</p>
              <div className="space-y-2 mb-6">
                {template.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-xs text-gray-500">• {item}</div>
                ))}
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                📄 Generate Invoice
              </button>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">💳 Supported Payment Methods</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-2xl">{method.icon}</span>
                <span className="text-gray-700">{method.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commission Management */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-slide-in-up">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">💼 Commission Management</h3>
        
        {/* Commission Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {commissionTiers.map((tier, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{tier.category}</h4>
              <div className="space-y-3">
                {tier.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center">
                    <span className="text-gray-700">{item.service}:</span>
                    <span className="font-semibold text-blue-600">{item.commission} commission</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Commission Tracking */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">📊 Commission Tracking & Payouts</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commissionTracking.map((person, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-blue-600">${person.amount}</div>
                <div className="text-sm text-gray-600 mt-1">{person.name}</div>
                <div className="text-xs text-gray-500">{person.department}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;