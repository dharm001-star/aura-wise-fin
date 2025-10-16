import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send } from "lucide-react";
import { useState } from "react";

const AIAssistant = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AURA-FIN AI assistant. I can help you understand your financial patterns, explain recommendations, and answer questions about your spending. How can I help you today?",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    setChatHistory([
      ...chatHistory,
      { role: "user", content: message },
      {
        role: "assistant",
        content: "I'm analyzing your question based on your financial data. This is a demo response - full AI integration coming soon!",
      },
    ]);
    setMessage("");
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in max-w-5xl mx-auto">
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-lg bg-gradient-primary">
          <Bot className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">AI Assistant</h1>
          <p className="text-muted-foreground">Ask me anything about your finances</p>
        </div>
      </div>

      {/* Suggested Queries */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow border-l-4 border-l-accent">
          <CardContent className="p-4">
            <div>
              <p className="text-sm font-medium">Why did my spending increase?</p>
              <p className="text-xs text-muted-foreground mt-1">Analyze recent expense patterns</p>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow border-l-4 border-l-accent">
          <CardContent className="p-4">
            <div>
              <p className="text-sm font-medium">How much should I save?</p>
              <p className="text-xs text-muted-foreground mt-1">Get personalized savings advice</p>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow border-l-4 border-l-accent">
          <CardContent className="p-4">
            <div>
              <p className="text-sm font-medium">Budget optimization tips</p>
              <p className="text-xs text-muted-foreground mt-1">Smart ways to reduce expenses</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chat Interface */}
      <Card className="min-h-[500px] flex flex-col">
        <CardHeader className="border-b">
          <CardTitle className="text-lg">Conversation</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-auto p-6 space-y-4">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-lg ${
                    msg.role === "user"
                      ? "bg-gradient-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="flex items-center space-x-2 mb-2">
                      <Bot className="h-4 w-4" />
                      <span className="text-xs font-medium">AURA-FIN AI</span>
                    </div>
                  )}
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Ask me about your finances..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIAssistant;
