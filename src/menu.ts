import {title} from "process"

export interface MenuInter {

    title:string
    src:string
    child?: MenuInter[]

}


export const cppMenu : MenuInter = {
    title: 'root',
    src:'',
    child : [
        {
            title:'cpp11',
            src:'cpp11',
            child: [
                {
                    title:'regex',
                    src:'regex/1.md'
                },
                {
                    title:'refercence_wrappers',
                    src:'refercence_wrappers/index.md',
                }
            ]
        },
        {
            title:'cpp20',
            src:'cpp20',
            child: [
                {
                    title:"range",
                    src:'ranges/index.md'
                }
            ]

        }
    ]
}
