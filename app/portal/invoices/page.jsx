// Filename: app/portal/invoices/page.jsx
'use client';

import { useState } from 'react';
import Icon from '../../components/Icon';

const invoices = [
  { 
    id: 'INV-001', 
    description: 'Discovery & Planning Phase', 
    amount: 12500, 
    status: 'Paid', 
    dueDate: '2024-08-15', 
    paidDate: '2024-08-12',
    items: [
      { name: 'Requirements Gathering', hours: 20, rate: 250, total: 5000 },
      { name: 'Market Research', hours: 15, rate: 250, total: 3750 },
      { name: 'Project Planning', hours: 15, rate: 250, total: 3750 },
    ]
  },
  { 
    id: 'INV-002', 
    description: 'UI/UX Design Phase', 
    amount: 25000, 
    status: 'Paid', 
    dueDate: '2024-10-01', 
    paidDate: '2024-09-28',
    items: [
      { name: 'Wireframing', hours: 30, rate: 250, total: 7500 },
      { name: 'Visual Design', hours: 40, rate: 250, total: 10000 },
      { name: 'Prototyping', hours: 20, rate: 250, total: 5000 },
      { name: 'Design Review & Revisions', hours: 10, rate: 250, total: 2500 },
    ]
  },
  { 
    id: 'INV-003', 
    description: 'Frontend Development - Milestone 1', 
    amount: 26250, 
    status: 'Paid', 
    dueDate: '2024-11-15', 
    paidDate: '2024-11-14',
    items: [
      { name: 'Component Development', hours: 60, rate: 275, total: 16500 },
      { name: 'Page Implementation', hours: 25, rate: 275, total: 6875 },
      { name: 'Responsive Design', hours: 10, rate: 275, total: 2875 },
    ]
  },
  { 
    id: 'INV-004', 
    description: 'Backend Integration - Current', 
    amount: 18500, 
    status: 'Pending', 
    dueDate: '2024-12-15', 
    paidDate: null,
    items: [
      { name: 'API Development', hours: 40, rate: 275, total: 11000 },
      { name: 'Database Integration', hours: 20, rate: 275, total: 5500 },
      { name: 'Authentication System', hours: 8, rate: 250, total: 2000 },
    ]
  },
];

export default function PortalInvoices() {
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const totalPaid = invoices.filter(i => i.status === 'Paid').reduce((sum, i) => sum + i.amount, 0);
  const totalPending = invoices.filter(i => i.status === 'Pending').reduce((sum, i) => sum + i.amount, 0);

  const handlePayWithStripe = async (invoice) => {
    setIsProcessing(true);
    
    // In production, this would call your Stripe API endpoint
    // const response = await fetch('/api/stripe/create-checkout', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ invoiceId: invoice.id, amount: invoice.amount }),
    // });
    // const { url } = await response.json();
    // window.location.href = url;

    // Simulating payment for demo
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        setPaymentSuccess(false);
        setSelectedInvoice(null);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Invoices</h1>
        <p className="text-gray-400">View and pay your project invoices</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Total Paid</span>
            <Icon name="CheckCircle" className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-2xl font-bold text-white">${totalPaid.toLocaleString()}</p>
        </div>
        <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Pending</span>
            <Icon name="AlertCircle" className="w-5 h-5 text-amber-400" />
          </div>
          <p className="text-2xl font-bold text-amber-400">${totalPending.toLocaleString()}</p>
        </div>
        <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Project Total</span>
            <Icon name="Receipt" className="w-5 h-5 text-sky-400" />
          </div>
          <p className="text-2xl font-bold text-white">${(totalPaid + totalPending).toLocaleString()}</p>
        </div>
      </div>

      {/* Invoices List */}
      <div className="bg-[#111827] border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Invoice</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Description</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Amount</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Due Date</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Status</th>
              <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <span className="text-white font-medium">{invoice.id}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-300">{invoice.description}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-white font-medium">${invoice.amount.toLocaleString()}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-400">{new Date(invoice.dueDate).toLocaleDateString()}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    invoice.status === 'Paid' 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => setSelectedInvoice(invoice)}
                      className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                      title="View Details"
                    >
                      <Icon name="Eye" className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                      title="Download PDF"
                    >
                      <Icon name="Download" className="w-4 h-4" />
                    </button>
                    {invoice.status === 'Pending' && (
                      <button
                        onClick={() => setSelectedInvoice(invoice)}
                        className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-sm transition-colors"
                      >
                        Pay Now
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Payment Methods Info */}
      <div className="bg-gradient-to-r from-sky-500/10 to-purple-500/10 border border-sky-500/20 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-white/10">
            <Icon name="CreditCard" className="w-6 h-6 text-sky-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Secure Payment Processing</h3>
            <p className="text-gray-400 text-sm mb-3">
              All payments are processed securely through Stripe. We accept all major credit cards, debit cards, and ACH bank transfers.
            </p>
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-white/10 rounded text-gray-300 text-xs">Visa</div>
              <div className="px-3 py-1 bg-white/10 rounded text-gray-300 text-xs">Mastercard</div>
              <div className="px-3 py-1 bg-white/10 rounded text-gray-300 text-xs">Amex</div>
              <div className="px-3 py-1 bg-white/10 rounded text-gray-300 text-xs">ACH</div>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Detail Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => !isProcessing && setSelectedInvoice(null)} />
          <div className="relative bg-[#111827] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Success Overlay */}
            {paymentSuccess && (
              <div className="absolute inset-0 bg-[#111827] flex items-center justify-center z-10 rounded-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Payment Successful!</h3>
                  <p className="text-gray-400">Thank you for your payment.</p>
                </div>
              </div>
            )}

            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">{selectedInvoice.id}</h2>
                <p className="text-gray-400">{selectedInvoice.description}</p>
              </div>
              <button
                onClick={() => !isProcessing && setSelectedInvoice(null)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                disabled={isProcessing}
              >
                <Icon name="X" className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Invoice Details */}
            <div className="p-6">
              {/* Status Banner */}
              <div className={`p-4 rounded-lg mb-6 ${
                selectedInvoice.status === 'Paid'
                  ? 'bg-emerald-500/10 border border-emerald-500/20'
                  : 'bg-amber-500/10 border border-amber-500/20'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon 
                      name={selectedInvoice.status === 'Paid' ? 'CheckCircle' : 'AlertCircle'} 
                      className={`w-5 h-5 ${selectedInvoice.status === 'Paid' ? 'text-emerald-400' : 'text-amber-400'}`} 
                    />
                    <span className={selectedInvoice.status === 'Paid' ? 'text-emerald-400' : 'text-amber-400'}>
                      {selectedInvoice.status === 'Paid' 
                        ? `Paid on ${new Date(selectedInvoice.paidDate).toLocaleDateString()}`
                        : `Due by ${new Date(selectedInvoice.dueDate).toLocaleDateString()}`
                      }
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-white">
                    ${selectedInvoice.amount.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Line Items */}
              <h3 className="text-white font-semibold mb-4">Line Items</h3>
              <div className="bg-white/5 rounded-lg overflow-hidden mb-6">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Item</th>
                      <th className="text-center px-4 py-3 text-sm font-medium text-gray-400">Hours</th>
                      <th className="text-center px-4 py-3 text-sm font-medium text-gray-400">Rate</th>
                      <th className="text-right px-4 py-3 text-sm font-medium text-gray-400">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {selectedInvoice.items.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 text-white">{item.name}</td>
                        <td className="px-4 py-3 text-gray-400 text-center">{item.hours}</td>
                        <td className="px-4 py-3 text-gray-400 text-center">${item.rate}/hr</td>
                        <td className="px-4 py-3 text-white text-right">${item.total.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-white/5">
                    <tr>
                      <td colSpan={3} className="px-4 py-3 text-white font-semibold text-right">Total</td>
                      <td className="px-4 py-3 text-white font-bold text-right">
                        ${selectedInvoice.amount.toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">
                  <Icon name="Download" className="w-4 h-4" />
                  Download PDF
                </button>
                {selectedInvoice.status === 'Pending' && (
                  <button
                    onClick={() => handlePayWithStripe(selectedInvoice)}
                    disabled={isProcessing}
                    className="flex items-center gap-2 px-6 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white transition-colors disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Icon name="CreditCard" className="w-4 h-4" />
                        Pay with Stripe
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
