import React, { useState } from 'react';
import { Send, Heart, Volume2 } from 'lucide-react';
import { templates } from '../data/templates';
import confetti from 'canvas-confetti';

export default function LetterForm() {
  const [formData, setFormData] = useState({
    recipientName: '',
    senderName: '',
    reason: '',
    selectedTemplate: '1',
    email: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const audio = new Audio('/break-sound.mp3');
    audio.play();
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsSent(true);
    setShowConfirmation(true);
    
    // Here you would typically send the email
    // For demo purposes, we'll just show the confirmation
    setTimeout(() => {
      setShowConfirmation(false);
      setIsSent(false);
      setFormData({
        recipientName: '',
        senderName: '',
        reason: '',
        selectedTemplate: '1',
        email: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Szakítólevél sablon</label>
            <select
              name="selectedTemplate"
              value={formData.selectedTemplate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            >
              {templates.map(template => (
                <option key={template.id} value={template.id}>
                  {template.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Címzett neve</label>
            <input
              type="text"
              name="recipientName"
              value={formData.recipientName}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Címzett email címe</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">A szakítás oka</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Feladó neve</label>
            <input
              type="text"
              name="senderName"
              value={formData.senderName}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSent}
          className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isSent ? 'bg-green-600' : 'bg-pink-600 hover:bg-pink-700'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500`}
        >
          {isSent ? (
            <>
              <Heart className="mr-2 h-4 w-4" /> Elküldve
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" /> Szakítás küldése
            </>
          )}
        </button>
      </form>

      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-medium text-gray-900">Szakítólevél elküldve!</h3>
            <p className="mt-2 text-sm text-gray-500">
              Értesíteni fogunk, ha a címzett megnyitotta a levelet.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}