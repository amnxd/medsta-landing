// Provider types for the Medsta platform
export interface Provider {
  uid: string;
  fullName: string;
  businessName?: string;
  about?: string;
  role: ProviderRole;
  email?: string;
  phone?: string;
  profilePicture?: string;
  onboardingCompleted: boolean;
  dashboardBannerDismissed: boolean;
  services: Service[];
  createdAt: string;
  updatedAt: string;
}

export type ProviderRole = 
  | 'doctor'
  | 'pharmacist'
  | 'lab'
  | 'physiotherapist'
  | 'delivery_partner'
  | 'other';

export interface Service {
  id: string;
  name: string;
  price?: number;
  enabled: boolean;
}

export interface Post {
  id: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
}

// Mock data for development
export const mockProvider: Provider = {
  uid: 'mock-user-123',
  fullName: 'Dr. Priya Sharma',
  businessName: 'Sharma Clinic',
  about: 'Experienced general physician with over 10 years of practice in Lucknow. Specialized in family medicine and preventive healthcare.',
  role: 'doctor',
  email: 'dr.priya@example.com',
  phone: '+91 9876543210',
  profilePicture: undefined,
  onboardingCompleted: true,
  dashboardBannerDismissed: false,
  services: [
    { id: '1', name: 'General Consultation', price: 500, enabled: true },
    { id: '2', name: 'Health Checkup', price: 1500, enabled: true },
    { id: '3', name: 'Follow-up Visit', price: 300, enabled: true },
    { id: '4', name: 'Home Visit', price: 1000, enabled: false },
  ],
  createdAt: '2025-01-01T10:00:00Z',
  updatedAt: '2025-01-03T10:00:00Z',
};

export const mockPosts: Post[] = [
  {
    id: '1',
    content: 'Happy to announce that our clinic is now equipped with advanced ECG facilities. Early heart health checkups can save lives! 🏥❤️',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
    createdAt: '2025-01-02T14:00:00Z',
  },
  {
    id: '2',
    content: 'Winter health tips: Stay hydrated, get your flu shots, and maintain good hygiene. Prevention is better than cure!',
    createdAt: '2025-01-01T09:00:00Z',
  },
  {
    id: '3',
    content: 'Thank you to all our patients for trusting us with your healthcare needs. Wishing everyone a healthy and prosperous new year! 🎉',
    createdAt: '2024-12-31T18:00:00Z',
  },
];
