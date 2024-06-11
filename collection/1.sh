#!/bin/bash

# 遍历当前目录下的所有.md文件
for file in *.md
do
  # 检查文件是否存在
  if [ -f "$file" ]; then
    # 使用sed命令替换文本
    sed -i '' 's/:\ 漫迪字幕组/漫迪字幕组/g' "$file"
    echo "Processed $file"
  else
    echo "No markdown files found in the current directory."
  fi
done
