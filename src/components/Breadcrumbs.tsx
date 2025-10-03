import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link
            to="/"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            itemProp="item"
          >
            <Home className="w-4 h-4" />
            <meta itemProp="name" content="Главная" />
            <meta itemProp="position" content="1" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-2"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            {item.path ? (
              <Link
                to={item.path}
                className="text-muted-foreground hover:text-foreground transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
                <meta itemProp="position" content={String(index + 2)} />
              </Link>
            ) : (
              <span className="text-foreground font-medium" itemProp="name">
                {item.label}
                <meta itemProp="position" content={String(index + 2)} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
