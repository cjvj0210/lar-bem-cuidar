import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, MessageSquare, Phone, User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  message: string;
  created_at: string;
}

const Admin = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data, error } = await supabase
          .from('contact_messages')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setMessages(data || []);
      } catch (error) {
        console.error('Erro ao carregar mensagens:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('contact_messages_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'contact_messages'
        },
        () => {
          fetchMessages();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "Hoje";
    if (diffInDays === 1) return "Ontem";
    if (diffInDays <= 7) return `Há ${diffInDays} dias`;
    
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const todayMessages = messages.filter(msg => {
    const date = new Date(msg.created_at);
    const today = new Date();
    return date.toDateString() === today.toDateString();
  });

  const thisWeekMessages = messages.filter(msg => {
    const date = new Date(msg.created_at);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return date >= weekAgo;
  });

  return (
    <div className="min-h-screen pt-20 bg-muted/30">
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-primary mb-2">Painel Administrativo</h1>
            <p className="text-muted-foreground">
              Gerencie as mensagens recebidas através do formulário de contato
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total de Mensagens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{messages.length}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Hoje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{todayMessages.length}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Esta Semana
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{thisWeekMessages.length}</div>
              </CardContent>
            </Card>
          </div>

          {/* Messages List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Mensagens Recebidas
              </CardTitle>
              <CardDescription>
                Lista de todas as mensagens enviadas pelos visitantes do site
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">Todas ({messages.length})</TabsTrigger>
                  <TabsTrigger value="today">Hoje ({todayMessages.length})</TabsTrigger>
                  <TabsTrigger value="week">Esta Semana ({thisWeekMessages.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                  {loading ? (
                    <>
                      <Skeleton className="h-40 w-full" />
                      <Skeleton className="h-40 w-full" />
                      <Skeleton className="h-40 w-full" />
                    </>
                  ) : messages.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      Nenhuma mensagem recebida ainda
                    </div>
                  ) : (
                    messages.map((message) => (
                      <Card key={message.id} className="border-l-4 border-l-primary">
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="space-y-2 flex-1">
                                <div className="flex items-center gap-2">
                                  <User className="w-4 h-4 text-muted-foreground" />
                                  <span className="font-semibold text-foreground">{message.name}</span>
                                  <Badge variant="secondary" className="ml-2">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {formatDate(message.created_at)}
                                  </Badge>
                                </div>
                                
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Phone className="w-4 h-4" />
                                    <a href={`tel:${message.phone}`} className="hover:text-primary">
                                      {message.phone}
                                    </a>
                                  </div>
                                  {message.email && (
                                    <div className="flex items-center gap-1">
                                      <Mail className="w-4 h-4" />
                                      <a href={`mailto:${message.email}`} className="hover:text-primary">
                                        {message.email}
                                      </a>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-muted/50 rounded-lg p-4">
                              <p className="text-foreground/90 whitespace-pre-wrap">
                                {message.message}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </TabsContent>

                <TabsContent value="today" className="space-y-4">
                  {todayMessages.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      Nenhuma mensagem recebida hoje
                    </div>
                  ) : (
                    todayMessages.map((message) => (
                      <Card key={message.id} className="border-l-4 border-l-primary">
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="space-y-2 flex-1">
                                <div className="flex items-center gap-2">
                                  <User className="w-4 h-4 text-muted-foreground" />
                                  <span className="font-semibold text-foreground">{message.name}</span>
                                  <Badge variant="secondary" className="ml-2">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {formatDate(message.created_at)}
                                  </Badge>
                                </div>
                                
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Phone className="w-4 h-4" />
                                    <a href={`tel:${message.phone}`} className="hover:text-primary">
                                      {message.phone}
                                    </a>
                                  </div>
                                  {message.email && (
                                    <div className="flex items-center gap-1">
                                      <Mail className="w-4 h-4" />
                                      <a href={`mailto:${message.email}`} className="hover:text-primary">
                                        {message.email}
                                      </a>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-muted/50 rounded-lg p-4">
                              <p className="text-foreground/90 whitespace-pre-wrap">
                                {message.message}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </TabsContent>

                <TabsContent value="week" className="space-y-4">
                  {thisWeekMessages.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      Nenhuma mensagem recebida esta semana
                    </div>
                  ) : (
                    thisWeekMessages.map((message) => (
                      <Card key={message.id} className="border-l-4 border-l-primary">
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="space-y-2 flex-1">
                                <div className="flex items-center gap-2">
                                  <User className="w-4 h-4 text-muted-foreground" />
                                  <span className="font-semibold text-foreground">{message.name}</span>
                                  <Badge variant="secondary" className="ml-2">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {formatDate(message.created_at)}
                                  </Badge>
                                </div>
                                
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Phone className="w-4 h-4" />
                                    <a href={`tel:${message.phone}`} className="hover:text-primary">
                                      {message.phone}
                                    </a>
                                  </div>
                                  {message.email && (
                                    <div className="flex items-center gap-1">
                                      <Mail className="w-4 h-4" />
                                      <a href={`mailto:${message.email}`} className="hover:text-primary">
                                        {message.email}
                                      </a>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-muted/50 rounded-lg p-4">
                              <p className="text-foreground/90 whitespace-pre-wrap">
                                {message.message}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Admin;
