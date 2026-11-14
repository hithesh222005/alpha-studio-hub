import React, { useState } from 'react';
import { DynamicIcon } from './DynamicIcon';
import { SHOP_INFO } from '../data/shopData';

interface PriceEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PriceEstimatorModal: React.FC<PriceEstimatorModalProps> = ({ isOpen, onClose }) => {
  const [bwPages, setBwPages] = useState<number>(10);
  const [bwCopies, setBwCopies] = useState<number>(1);
  const [colorPages, setColorPages] = useState<number>(0);
  const [passportPhotoSets, setPassportPhotoSets] = useState<number>(0); // 1 set = 8 photos @ ₹50
  const [spiralBooks, setSpiralBooks] = useState<number>(0); // ₹30/book
  const [laminationSheets, setLaminationSheets] = useState<number>(0); // ₹20/sheet

  if (!isOpen) return null;

  // Calculation Logic
  const bwRate = bwPages * bwCopies > 50 ? 1.5 : 2; // Volume discount over 50 pages
  const bwTotal = bwPages * bwCopies * bwRate;
  const colorTotal = colorPages * 10;
  const passportTotal = passportPhotoSets * 50;
  const spiralTotal = spiralBooks * 30;
  const laminationTotal = laminationSheets * 20;

  const grandTotal = bwTotal + colorTotal + passportTotal + spiralTotal + laminationTotal;

  const handleSendEstimateToWhatsApp = () => {
    let summary = `Hello Nexoro, I calculated an estimated order cost:\n`;
    if (bwPages > 0) summary += `- B&W Print/Xerox: ${bwPages} pgs x ${bwCopies} copies = ₹${bwTotal}\n`;
    if (colorPages > 0) summary += `- Color Printout: ${colorPages} pgs = ₹${colorTotal}\n`;
    if (passportPhotoSets > 0) summary += `- Passport Photos: ${passportPhotoSets} set(s) (8 photos each) = ₹${passportTotal}\n`;
    if (spiralBooks > 0) summary += `- Spiral Binding: ${spiralBooks} book(s) = ₹${spiralTotal}\n`;
    if (laminationSheets > 0) summary += `- Lamination: ${laminationSheets} sheet(s) = ₹${laminationTotal}\n`;
    summary += `\n*Estimated Total: ₹${grandTotal}*\nPlease confirm if I can send files.`;

    const url = `https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent(summary)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold">
              <DynamicIcon name="Calculator" className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-outfit font-extrabold text-lg text-white">Print & Xerox Cost Estimator</h3>
              <p className="text-xs text-amber-300">Instant accurate pricing for Nexoro</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <DynamicIcon name="X" className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {/* Black & White Print / Xerox */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <div className="flex items-center justify-between mb-3">
              <span className="font-outfit font-bold text-slate-900 text-sm flex items-center gap-2">
                <DynamicIcon name="Printer" className="w-4 h-4 text-slate-700" />
                Black & White Printout / Xerox (A4)
              </span>
              <span className="text-xs text-slate-500 font-medium">₹2 / page (&gt;50 pgs ₹1.5)</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-500 font-semibold mb-1 block">Number of Pages</label>
                <input
                  type="number"
                  min="0"
                  value={bwPages}
                  onChange={(e) => setBwPages(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm font-bold"
                />
              </div>

              <div>
                <label className="text-xs text-slate-500 font-semibold mb-1 block">Copies</label>
                <input
                  type="number"
                  min="1"
                  value={bwCopies}
                  onChange={(e) => setBwCopies(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm font-bold"
                />
              </div>
            </div>
            
            <div className="mt-2 text-right text-xs font-bold text-slate-700">
              Subtotal: ₹{bwTotal}
            </div>
          </div>

          {/* Color Printout */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="font-outfit font-bold text-slate-900 text-sm flex items-center gap-2">
                <DynamicIcon name="Palette" className="w-4 h-4 text-purple-600" />
                Color Printouts (A4)
              </span>
              <span className="text-xs text-slate-500 font-medium">₹10 / page</span>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                value={colorPages}
                onChange={(e) => setColorPages(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm font-bold"
              />
              <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Subtotal: ₹{colorTotal}</span>
            </div>
          </div>

          {/* Passport Photos */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="font-outfit font-bold text-slate-900 text-sm flex items-center gap-2">
                <DynamicIcon name="Camera" className="w-4 h-4 text-blue-600" />
                Passport Photo Sheets (8 Photos per sheet)
              </span>
              <span className="text-xs text-slate-500 font-medium">₹50 / sheet</span>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                value={passportPhotoSets}
                onChange={(e) => setPassportPhotoSets(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm font-bold"
              />
              <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Subtotal: ₹{passportTotal}</span>
            </div>
          </div>

          {/* Spiral Binding */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
              <span className="font-outfit font-bold text-slate-900 text-xs block mb-1">Spiral Binding</span>
              <span className="text-[11px] text-slate-500 block mb-2">₹30 / book</span>
              <input
                type="number"
                min="0"
                value={spiralBooks}
                onChange={(e) => setSpiralBooks(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-xs font-bold"
              />
            </div>

            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
              <span className="font-outfit font-bold text-slate-900 text-xs block mb-1">Document Lamination</span>
              <span className="text-[11px] text-slate-500 block mb-2">₹20 / sheet</span>
              <input
                type="number"
                min="0"
                value={laminationSheets}
                onChange={(e) => setLaminationSheets(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-xs font-bold"
              />
            </div>
          </div>

        </div>

        {/* Modal Footer with Grand Total */}
        <div className="bg-slate-100 p-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-500 font-medium block">Estimated Grand Total</span>
            <span className="font-outfit font-black text-2xl text-slate-900">₹{grandTotal}</span>
          </div>

          <button
            onClick={handleSendEstimateToWhatsApp}
            disabled={grandTotal === 0}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <DynamicIcon name="MessageCircle" className="w-4 h-4" />
            <span>Confirm Order on WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
