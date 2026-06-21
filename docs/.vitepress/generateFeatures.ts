import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getFeatureIcon(data: Record<string, any>) {
  const iconSrc = data['icon-src'];
  if (typeof iconSrc === 'string' && iconSrc.trim()) {
    return { src: iconSrc.trim() };
  }

  const icon = data.icon;
  if (typeof icon === 'string' && icon.trim()) {
    return icon.trim();
  }

  return undefined;
}

function renderIcon(icon: string | { src: string } | undefined) {
  if (typeof icon === 'string') {
    return `    icon: "${icon}"`;
  }

  if (icon?.src) {
    return `    icon:\n      src: ${icon.src}`;
  }

  return '';
}

export function generateFeatures(collectionDir: string, featureFile: string) {
  const features = fs.readdirSync(collectionDir)
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(collectionDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(content);
      const title = typeof data.title === 'string' && data.title.trim()
        ? data.title.trim()
        : file.replace(/\.md$/, '');

      return {
        title,
        link: `/collection/${file.replace('.md', '')}`,
        icon: getFeatureIcon(data),
        sort: data.sort ?? 0
      };
    })
    .sort((a, b) => b.sort - a.sort || a.title.localeCompare(b.title)); // 按 sort 字段排序，缺少 sort 字段视为 0，按文件名排序

  const featuresContent = `features:\n${features.map(feature => {
    const icon = renderIcon(feature.icon);
    return `
  - title: ${feature.title}
    link: ${feature.link}${icon ? `\n${icon}` : ''}
`;
  }).join('')}`;

  fs.writeFileSync(featureFile, featuresContent);
}
