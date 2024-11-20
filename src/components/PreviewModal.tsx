import React from 'react';
import { X } from 'lucide-react';
import { Template } from '../data/templates';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  data: {
    recipientName: string;
    senderName: string;
    reason: string;
    template: Template;
  };
}

export default function PreviewModal({ isOpen, onClose, onConfirm, data }: PreviewModalProps) {
  if (!isOpen) return null;

  const content = data.template.content
    .replace('{name}', data.recipientName)
    .replace('{reason}', data.reason)
    .replace('{sender}', data.senderName);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative bg-white rounded-lg max-w-2xl w-full mx-4 p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-semibold mb-4">Levél előnézet</h2>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6 whitespace-pre-wrap">
          {content}
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Mégsem
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
          >
            Küldés
          </button>
        </div>
      </div>
    </div>
  );
}