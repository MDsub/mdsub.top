import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function generateFeatures(collectionDir: string, featureFile: string) {
  const features = fs.readdirSync(collectionDir)
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(collectionDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(content);
      return {
        title: data.title,
        link: `/collection/${file.replace('.md', '')}`,
        icon: data['icon-src'] ? { src: data['icon-src'] } : data.icon,
        sort: data.sort ?? 0
      };
    })
    .sort((a, b) => b.sort - a.sort || a.title.localeCompare(b.title)); // 按 sort 字段排序，缺少 sort 字段视为 0，按文件名排序

  const featuresContent = `features:\n${features.map(feature => `
  - title: ${feature.title}
    link: ${feature.link}
    icon: ${typeof feature.icon === 'string' ? `"${feature.icon}"` : `\n      src: ${feature.icon.src}`}
`).join('')}`;

  fs.writeFileSync(featureFile, featuresContent);
}
