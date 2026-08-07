import React, { useState } from 'react';
import { DynamicIcon } from './DynamicIcon';
import { SHOP_INFO } from '../data/shopData';

interface QuickPrintUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickPrintUploadModal: React.FC<QuickPrintUploadModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [printType, setPrintType] = useState<'bw' | 'color' | 'both'>('bw');
  const [copies, setCopies] = useState<number>(1);
  const [paperSide, setPaperSide] = useState<'double' | 'single'>('double');
  const [notes, setNotes] = useState<string>('');

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSendToWhatsApp = () => {
    let msg = `Hello Alpha Studio Hub! I have a document to print:\n`;
    msg += `📄 File Name: ${selectedFile ? selectedFile.name : 'Will attach in chat'}\n`;
    msg += `🎨 Print Type: ${printType === 'bw' ? 'Black & White' : printType === 'color' ? 'Full Color' : 'Mix B&W + Color'}\n`;
    msg += `📄 Sides: ${paperSide === 'double' ? 'Both Sides (Double sided)' : 'Single Sided'}\n`;
    msg += `🔢 Copies: ${copies}\n`;
    if (notes) msg += `📝 Notes: ${notes}\n`;
    msg += `\nI am attaching the document file now. Please confirm print pricing!`;

    const url = `https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500 text-white font-bold">
              <DynamicIcon name="Upload" className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-outfit font-extrabold text-lg text-white">Send Document for Quick Printing</h3>
              <p className="text-xs text-blue-300">Fast document transfer to Alpha Studio Hub</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <DynamicIcon name="X" className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-4">
          
          {/* File Picker Box */}
          <div className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-2xl p-5 text-center bg-slate-50 transition-colors cursor-pointer relative">
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
            
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-2">
              <DynamicIcon name="Upload" className="w-5 h-5" />
            </div>

            {selectedFile ? (
              <div className="text-sm font-bold text-slate-900 truncate">
                Selected: <span className="text-blue-600">{selectedFile.name}</span>
                <span className="block text-xs text-slate-500 font-normal mt-0.5">
                  ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                </span>
              </div>
            ) : (
              <div>
                <p className="text-xs font-bold text-slate-800">Click to select PDF or image file</p>
                <p className="text-[11px] text-slate-500 mt-1">Supports PDF, Word, JPG, PNG files</p>
              </div>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">Print Color</label>
              <select
                value={printType}
                onChange={(e) => setPrintType(e.target.value as 'bw' | 'color' | 'both')}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-xs font-bold"
              >
                <option value="bw">Black & White (B&W)</option>
                <option value="color">Full Color</option>
                <option value="both">Mix (Specify in notes)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">Paper Sides</label>
              <select
                value={paperSide}
                onChange={(e) => setPaperSide(e.target.value as 'double' | 'single')}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-xs font-bold"
              >
                <option value="double">Both Sides (Duplex)</option>
                <option value="single">Single Sided</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 mb-1 block">Number of Copies</label>
            <input
              type="number"
              min="1"
              value={copies}
              onChange={(e) => setCopies(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-xs font-bold"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 mb-1 block">Special Instructions / Binding Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Spiral binding required, or print pages 1-10 in color..."
              rows={2}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-xs"
            ></textarea>
          </div>

        </div>

        {/* Footer Action */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex items-center justify-between gap-3">
          <span className="text-xs text-slate-500 font-medium">Opens WhatsApp with message</span>

          <button
            onClick={handleSendToWhatsApp}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <DynamicIcon name="MessageCircle" className="w-4 h-4" />
            <span>Send File to WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
