import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Users, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookingForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: t('booking.successTitle'),
      description: t('booking.successMessage'),
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="shadow-floating sticky top-24">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">
          {t('booking.title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">{t('booking.name')}</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t('booking.namePlaceholder')}
            />
          </div>

          <div>
            <Label htmlFor="email">{t('booking.email')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={t('booking.emailPlaceholder')}
            />
          </div>

          <div>
            <Label htmlFor="phone">{t('booking.phone')}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+7 (___) ___-__-__"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="checkIn" className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{t('booking.checkIn')}</span>
              </Label>
              <Input
                id="checkIn"
                name="checkIn"
                type="date"
                value={formData.checkIn}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="checkOut" className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{t('booking.checkOut')}</span>
              </Label>
              <Input
                id="checkOut"
                name="checkOut"
                type="date"
                value={formData.checkOut}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="guests" className="flex items-center space-x-2">
              <Users size={16} />
              <span>{t('booking.guests')}</span>
            </Label>
            <Input
              id="guests"
              name="guests"
              type="number"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              required
              placeholder="2"
            />
          </div>

          <div>
            <Label htmlFor="message" className="flex items-center space-x-2">
              <MessageSquare size={16} />
              <span>{t('booking.message')}</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('booking.messagePlaceholder')}
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            {t('booking.submit')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;