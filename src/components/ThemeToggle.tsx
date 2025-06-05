
import { Moon, Sun, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="luxury-card hover:bg-luxury-gold/10 border-luxury-gold/30 hover:border-luxury-gold transition-all duration-300 hover:scale-105"
        >
          <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="luxury-card z-50 border-luxury-gold/20 bg-background/95 backdrop-blur-lg"
      >
        <DropdownMenuItem 
          onClick={() => setTheme('light')}
          className={`hover:bg-luxury-gold/10 hover:text-luxury-gold transition-colors cursor-pointer ${theme === 'light' ? 'bg-luxury-gold/20 text-luxury-gold' : ''}`}
        >
          <Sun className="mr-2 w-4 h-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('dark')}
          className={`hover:bg-luxury-gold/10 hover:text-luxury-gold transition-colors cursor-pointer ${theme === 'dark' ? 'bg-luxury-gold/20 text-luxury-gold' : ''}`}
        >
          <Moon className="mr-2 w-4 h-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('system')}
          className={`hover:bg-luxury-gold/10 hover:text-luxury-gold transition-colors cursor-pointer ${theme === 'system' ? 'bg-luxury-gold/20 text-luxury-gold' : ''}`}
        >
          <Palette className="mr-2 w-4 h-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
