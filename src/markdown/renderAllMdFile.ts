/** 
 * 读取所有 menu.ts的数据
 * 然后渲染成html文件
 * */


import {existsSync} from 'fs'
import {join} from 'path'
import { readFileSync } from 'fs'
import ejs from 'ejs'
import {MenuInter,cppMenu} from '../menu'

import {render_to_html} from './markdown'

//执行这个函数,就会把所有的menu内的文件渲染成对应路径的html
export default (outDir:string) => {

    //step 1. flattening menu
    let flattened_mds : string[] = []

    function dfs_menu( menu:MenuInter, father_path:string) {
        // console.log( father_path,menu.src )
        if( menu.child )
            menu.child.forEach( m => dfs_menu(m, join(father_path,menu.src)  ) )
        else
            flattened_mds.push(join(father_path,menu.src))
    }
    
    cppMenu.child?.forEach( menu => dfs_menu(menu, cppMenu.src))

    // console.log( "======================" )
    //step 2.render all markdown
    flattened_mds.forEach( md_path => {
        if( existsSync (md_path) ) {
            // console.log(md_path);
            render_to_html(md_path,join(outDir,md_path))
        }
        else {
            console.error('not exists : ' ,md_path)
        }
    })

}
