import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Hammer, PaintBucket, HomeIcon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function RenovationSlider() {
  const [value, setValue] = useState([0]);
  const currentValue = value[0];

  const stages = [
    {
      id: 0,
      title: "Голые стены",
      description: "Базовый объект без отделки",
      icon: Hammer,
      color: "text-muted-foreground",
      bgColor: "bg-muted",
    },
    {
      id: 25,
      title: "Черновая отделка",
      description: "Основные коммуникации и стяжка",
      icon: PaintBucket,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      id: 50,
      title: "Чистовая отделка",
      description: "Напольные покрытия и покраска",
      icon: HomeIcon,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: 75,
      title: "Меблировка",
      description: "Мебель и техника",
      icon: Sparkles,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: 100,
      title: "Готов к сдаче",
      description: "Полностью готовые апартаменты",
      icon: Sparkles,
      color: "text-luxury",
      bgColor: "bg-gradient-luxury",
    },
  ];

  const getCurrentStage = () => {
    return stages.reduce((prev, current) =>
      Math.abs(current.id - currentValue) < Math.abs(prev.id - currentValue) ? current : prev
    );
  };

  const currentStage = getCurrentStage();

  const features = [
    "Дизайн-проект",
    "Строительные работы",
    "Меблировка под ключ",
    "Профессиональная фотосъемка",
    "Размещение на площадках",
    "Управление арендой"
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-luxury">
      <CardContent className="p-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Подготовка объекта под ключ
            </h3>
            <p className="text-muted-foreground">
              Двигайте ползунок, чтобы увидеть процесс трансформации
            </p>
          </div>

          {/* Visual representation */}
          <div className="relative h-48 bg-surface rounded-2xl overflow-hidden">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              key={currentStage.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-20 h-20 rounded-2xl ${currentStage.bgColor} flex items-center justify-center ${currentStage.color}`}>
                <currentStage.icon className="h-10 w-10" />
              </div>
            </motion.div>

            {/* Progress bar background */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-muted">
              <motion.div
                className="h-full bg-gradient-luxury"
                initial={{ width: 0 }}
                animate={{ width: `${currentValue}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Slider */}
          <div className="space-y-4">
            <Slider
              value={value}
              onValueChange={setValue}
              max={100}
              step={1}
              className="w-full"
            />

            {/* Stage labels */}
            <div className="flex justify-between text-xs text-muted-foreground">
              {stages.map((stage) => (
                <div key={stage.id} className="text-center">
                  <div className="font-medium">{stage.id}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Current stage info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.id}
              className="text-center space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-semibold text-foreground">
                {currentStage.title}
              </h4>
              <p className="text-muted-foreground">
                {currentStage.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Features list */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: currentValue >= (index * 16.67) ? 1 : 0.3, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-2 h-2 rounded-full ${
                  currentValue >= (index * 16.67) ? 'bg-luxury' : 'bg-muted'
                }`} />
                <span className={`text-sm ${
                  currentValue >= (index * 16.67) ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
