import fs from 'fs'
import path from 'path' // 用于处理文件路径


export default {
  
  paths() {
    return fs
      .readdirSync('collection')
      .filter((pkg) => pkg.endsWith('.md')) // 只处理 .md 文件
      .map((pkg) => {
        const filePath = path.join('collection', pkg) // 拼接文件路径
        const content = fs.readFileSync(filePath, 'utf-8') // 读取文件内容
        const uri = '123'
        return { 
          params: { 
            pkg: pkg.replace(/\.md$/, '') // 去除 .md 扩展名
          },
          content,
           // 存入文件内容
          uri,
        }
      })
  }
}