
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, MoreVertical, Phone, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Conversation } from './types';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface WhatsAppHeaderProps {
  conversation: Conversation;
  isOnline?: boolean;
  onBack?: () => void;
  onViewProfile?: () => void;
}

const WhatsAppHeader: React.FC<WhatsAppHeaderProps> = ({ 
  conversation, 
  isOnline = false,
  onBack,
  onViewProfile
}) => {
  const navigate = useNavigate();

  const handleVideoCall = () => {
    toast.success("Fonctionnalité d'appel vidéo à venir");
  };

  const handleVoiceCall = () => {
    toast.success("Fonctionnalité d'appel vocal à venir");
  };

  const handleMoreOptions = () => {
    // This would typically open a dropdown with more options
  };

  return (
    <div className="whatsapp-header">
      {onBack && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="whatsapp-back-button text-white"
          onClick={onBack}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      )}

      <div 
        className="flex items-center flex-1 cursor-pointer" 
        onClick={onViewProfile || (() => toast.success("Affichage du profil à venir"))}
      >
        <div className="relative">
          <Avatar className="whatsapp-user-avatar">
            <AvatarImage src={conversation.with.avatar || '/placeholder.svg'} />
            <AvatarFallback>
              {conversation.with.name ? conversation.with.name.charAt(0) : 'U'}
            </AvatarFallback>
          </Avatar>
          {isOnline && <div className="whatsapp-online-indicator"></div>}
          {!isOnline && <div className="whatsapp-offline-indicator"></div>}
        </div>
        
        <div className="whatsapp-user-info">
          <h3 className="font-semibold text-white">{conversation.with.name}</h3>
          <div className="text-xs text-white/80">
            {isOnline ? 'En ligne' : 'Dernière connexion il y a 2 heures'}
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="text-white" onClick={handleVideoCall}>
          <Video className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white" onClick={handleVoiceCall}>
          <Phone className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem onClick={onViewProfile}>
              Voir le profil
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toast.success("Médias partagés")}>
              Médias, liens et docs
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toast.success("Recherche")}>
              Rechercher
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => toast.success("Notification")}>
              Notifications
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toast.success("Message éphémère")}>
              Messages éphémères
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => toast.success("Bloquer")}>
              Bloquer
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500" onClick={() => toast.success("Supprimer")}>
              Supprimer la conversation
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default WhatsAppHeader;
