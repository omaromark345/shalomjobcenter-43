
import React from 'react';
import { Bell, Search, BookmarkX, BellOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyNotificationStateProps {
  type: 'all' | 'unread' | 'messages' | 'reservations' | 'saved';
}

const EmptyNotificationState = ({ type }: EmptyNotificationStateProps) => {
  const getContent = () => {
    switch (type) {
      case 'all':
        return {
          icon: <Bell className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />,
          title: "Pas de notification",
          description: "Vous n'avez aucune notification pour le moment.",
          buttonText: "Retour à l'accueil",
          buttonUrl: "/"
        };
      case 'unread':
        return {
          icon: <BellOff className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />,
          title: "Tout est à jour",
          description: "Vous avez lu toutes vos notifications.",
          buttonText: "Voir toutes les notifications",
          buttonUrl: "#",
          buttonAction: () => {
            const element = document.querySelector('[data-value="all"]');
            if (element && element instanceof HTMLElement) {
              element.click();
            }
          }
        };
      case 'messages':
        return {
          icon: <Search className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />,
          title: "Pas de messages",
          description: "Vous n'avez aucun message pour le moment.",
          buttonText: "Envoyer un message",
          buttonUrl: "/messages"
        };
      case 'reservations':
        return {
          icon: <Search className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />,
          title: "Pas de réservations",
          description: "Vous n'avez aucune notification de réservation.",
          buttonText: "Voir mes réservations",
          buttonUrl: "/reservations"
        };
      case 'saved':
        return {
          icon: <BookmarkX className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />,
          title: "Pas de notifications sauvegardées",
          description: "Vous n'avez pas encore sauvegardé de notifications.",
          buttonText: "Voir toutes les notifications",
          buttonUrl: "#",
          buttonAction: () => {
            const element = document.querySelector('[data-value="all"]');
            if (element && element instanceof HTMLElement) {
              element.click();
            }
          }
        };
      default:
        return {
          icon: <Bell className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />,
          title: "Pas de notification",
          description: "Vous n'avez aucune notification pour le moment.",
          buttonText: "Retour à l'accueil",
          buttonUrl: "/"
        };
    }
  };

  const content = getContent();

  return (
    <div className="flex flex-col items-center justify-center py-8 sm:py-12 px-3 sm:px-4 text-center">
      <div className="bg-gray-50 p-4 sm:p-6 rounded-full mb-4">
        {content.icon}
      </div>
      <h3 className="mt-2 sm:mt-4 text-base sm:text-lg font-medium text-gray-900">{content.title}</h3>
      <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500 max-w-xs">{content.description}</p>
      <Button 
        className="mt-4 sm:mt-6" 
        variant="outline"
        onClick={content.buttonAction}
        asChild={!content.buttonAction}
      >
        {content.buttonAction ? (
          <span>{content.buttonText}</span>
        ) : (
          <a href={content.buttonUrl}>{content.buttonText}</a>
        )}
      </Button>
    </div>
  );
};

export default EmptyNotificationState;
