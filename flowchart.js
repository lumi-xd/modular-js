//                               //Multiple Properties//
//                                         ^
// (element):`{    //Multiple Values//     |
//                         |               |
//                         v               |
//        (property):[//,//,//,//,], }_____/
//        (property):[//,//,//,//,]  }
//                    |
//                    v
//                    \---------------------------->-------------------(Constant CSS)--------->------------\
//                                                           |                                             |
//                                                           \---->--(Accept conditions)---\               |
//                                                                                         |               |
//                //Parts of Values//                                                      |               |
//                         |                                                               |               |
//                         |                                                               v               |
//         {               v                                                               |               v
//             value:[ [],[],[],[],[] ],                                                   |               |
//             cond:[//conditon//]------<------(Condition for entire value)-------<--------|               |
//         }            |                                                                  |               |
//                      v                                                                  v               |
//             //Needs To Be True//                                                        |               |
//         {                                                                               |               |
//             value:[ [],[],[],[],[] ]---------<-------(No Condition)---------<-----------/-<-(Same As)->-\--------->--------(property):[//text/number/statement//,//text/number/statement//]
//         }             |
//                       |                                                                                                                             //If Value < min / > max, Value=min/max//
//                       v                                                                                                                                              ^
//                       |                                                                                                    //Needs To Be True//                      |
//              (Fragments Of Value)                                                                                                  ^                      -----------^-----------
//                       |                                                                                                   {        |               {     /                 {     \
//                       v                                                                                                     cond:[//condition//]     min://num//             max://num//
//                       |------>-----(No Condition)------>-----[ [//text/number/statement//],[//text/number/statement//] ]           ^              }     ^        }               ^       }
//                       v                                                                                                            |                    |                        |
//                       \------>-----(Specify Conditions)----->-----[ [//text/number/statement//,{//}] ]                             |                    |                        |
//                                                                                                 |                             (Condition)     (Specify Minimum Value) (Specify Maximum Value)
//                                                                                                 v                                  ^                    ^                        ^
//                                                                                                 |                                  |                    |                        |
//                                                                                                 \----------------------->----------^--------------------^--------------->--------^----->----(Can Be In Combination Also)
