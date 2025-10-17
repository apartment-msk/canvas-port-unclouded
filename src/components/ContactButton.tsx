import { useState, useEffect } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export const ContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const contacts = [
    {
      icon: Phone,
      label: t('contactButton.callUs'),
      href: 'tel:+79955085808',
      color: 'text-blue-500',
    },
    {
      icon: MessageCircle,
      label: t('contactButton.whatsapp'),
      href: 'https://wa.me/79955085808',
      color: 'text-green-500',
    },
    {
      icon: MessageCircle,
      label: t('contactButton.telegram'),
      href: 'https://t.me/Volshebno_tyt',
      color: 'text-blue-400',
    },
    {
      icon: Mail,
      label: t('contactButton.writeEmail'),
      href: 'mailto:info@volshebno-tut.ru',
      color: 'text-red-500',
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Contact Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="fixed right-4 bottom-24 md:right-6 md:bottom-28 z-50 bg-background border border-border rounded-lg shadow-lg p-4 w-64"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {t('contactButton.title')}
                  </h3>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-2">
                  {contacts.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors group"
                      >
                        <Icon className={`w-5 h-5 ${contact.color}`} />
                        <span className="text-sm text-foreground group-hover:text-accent-foreground">
                          {contact.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 flex items-center gap-4"
          >
            {/* Optional text label - appears on desktop */}
            {!isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="hidden md:block bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 
                  text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap font-medium"
              >
                {t('contactButton.title')}!
              </motion.div>
            )}
            
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative rounded-full h-16 w-16 md:h-20 md:w-20 
                bg-gradient-to-r from-green-400 via-green-500 to-emerald-600
                shadow-2xl hover:shadow-green-500/50
                transition-all duration-300 
                flex items-center justify-center
                before:absolute before:inset-0 before:rounded-full 
                before:bg-green-400/50 before:animate-ping
                animate-bounce hover:animate-none
                after:animate-none"
              aria-label={t('contactButton.title')}
            >
              <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10" />
            </motion.button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
