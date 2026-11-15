import React, { useState } from 'react';
import { DynamicIcon } from './DynamicIcon';
import { SHOP_INFO } from '../data/shopData';

interface QuickPrintUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickPrintUploadModal: React.FC<QuickPrintUploadModalProps> = ({ isOpen, onClose }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [customerName, setCustomerName] = useState('');
  const [printType, setPrintType] = useState<'bw' | 'color' | 'both'>('bw');
  const [copies, setCopies] = useState<number>(1);
  const [paperSide, setPaperSide] = useState<'double' | 'single'>('double');
  const [notes, setNotes] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(Array.from(e.target.files ?? []));
    e.currentTarget.value = '';
    setErrorMessage('');
  };

  const buildOrderMessage = () => {
    let msg = `Hello Nexoro! I have a document to print.\n`;
    msg += `👤 Name: ${customerName.trim()}\n`;
    msg += `📄 Files: ${selectedFiles.length ? selectedFiles.map((file) => file.name).join(', ') : 'I will attach them in chat'}\n`;
    msg += `🎨 Print Type: ${printType === 'bw' ? 'Black & White' : printType === 'color' ? 'Full Color' : 'Mix B&W + Color'}\n`;
    msg += `📄 Sides: ${paperSide === 'double' ? 'Both Sides (Double sided)' : 'Single Sided'}\n`;
    msg += `🔢 Copies: ${copies}\n`;
    if (notes) msg += `📝 Notes: ${notes}\n`;
    msg += selectedFiles.length
      ? `\nI will attach my selected files in this WhatsApp chat. Please confirm print pricing!`
      : `\nI will attach the document files in this chat. Please confirm print pricing!`;
    return msg;
  };

  const whatsappUrl = `https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent(buildOrderMessage())}`;

  const handleOpenWhatsApp = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!customerName.trim()) {
      e.preventDefault();
      setErrorMessage('Please enter your name so the shop can identify your order.');
      return;
    }
    setErrorMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500 text-white font-bold">
              <DynamicIcon name="Upload" className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-outfit font-extrabold text-lg text-white">Send Document for Quick Printing</h3>
              <p className="text-xs text-blue-300">Fast document transfer to Nexoro</p>
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
        <div className="p-6 space-y-4 overflow-y-auto">
          
          {/* File Picker Box */}
          <label className="block border-2 border-dashed border-slate-300 hover:border-blue-500 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 rounded-2xl p-5 text-center bg-slate-50 transition-colors cursor-pointer">
            <input
              type="file"
              onChange={handleFileChange}
              multiple
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png"
              className="sr-only"
            />
            
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-2">
              <DynamicIcon name="Upload" className="w-5 h-5" />
            </div>

            {selectedFiles.length ? (
              <div className="text-sm font-bold text-slate-900">
                {selectedFiles.length} file{selectedFiles.length === 1 ? '' : 's'} selected
                <ul className="mt-2 space-y-1 text-xs font-normal text-slate-600">
                  {selectedFiles.map((file, index) => (
                    <li key={`${file.name}-${index}`} className="truncate">
                      <span className="text-blue-600">{file.name}</span>
                      <span className="ml-1">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <p className="text-xs font-bold text-slate-800">Click to select files or images</p>
                <p className="text-[11px] text-slate-500 mt-1">Supports PDF, Word, JPG, JPEG and PNG. You can select multiple files.</p>
              </div>
            )}
          </label>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <h4 className="text-xs font-bold text-emerald-900 mb-2">After WhatsApp opens</h4>
            <ol className="list-decimal pl-4 space-y-1 text-[11px] leading-relaxed text-emerald-900">
              <li>Open the chat with your order message already filled in.</li>
              <li>Tap the 📎 attach icon at the bottom of the chat.</li>
              <li>Choose Gallery for a photo, or Document for a PDF or Word file.</li>
              <li>Select the file, add it to the chat, and tap Send.</li>
            </ol>
          </div>

          <div>
            <label htmlFor="print-customer-name" className="text-xs font-bold text-slate-700 mb-1 block">Your Name</label>
            <input
              id="print-customer-name"
              type="text"
              value={customerName}
              onChange={(e) => {
                setCustomerName(e.target.value);
                setErrorMessage('');
              }}
              placeholder="Enter your name"
              autoComplete="name"
              required
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-xs"
            />
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

          {errorMessage && <p role="alert" className="text-xs font-medium text-red-600">{errorMessage}</p>}

        </div>

        {/* Footer Action */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-xs text-slate-500 font-medium">
            {selectedFiles.length ? 'Your selected files are listed in the message; attach them in WhatsApp.' : 'Opens WhatsApp with your order'}
          </span>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOpenWhatsApp}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md shrink-0"
          >
            <DynamicIcon name="MessageCircle" className="w-4 h-4" />
            <span>Open WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
