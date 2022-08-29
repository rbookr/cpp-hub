let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/mycode/rbookr/C++HuB/cpp20/ranges
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +1054 gcc-10.1.0.ranges.hpp
badd +53 ~/mycode/rbookr/C++HuB/cpp20/ranges/range源码阅读.txt
argglobal
%argdel
$argadd gcc-10.1.0.ranges.hpp
edit gcc-10.1.0.ranges.hpp
argglobal
balt ~/mycode/rbookr/C++HuB/cpp20/ranges/range源码阅读.txt
setlocal fdm=expr
setlocal fde=nvim_treesitter#foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=6
setlocal fml=1
setlocal fdn=20
setlocal fen
30
normal! zo
33
normal! zo
39
normal! zo
54
normal! zo
56
normal! zo
83
normal! zo
445
normal! zo
465
normal! zo
480
normal! zo
482
normal! zo
483
normal! zo
483
normal! zc
527
normal! zo
528
normal! zo
528
normal! zc
582
normal! zo
584
normal! zo
585
normal! zo
584
normal! zc
603
normal! zo
628
normal! zo
632
normal! zo
632
normal! zc
916
normal! zo
918
normal! zo
1037
normal! zo
1042
normal! zo
1059
normal! zo
1061
normal! zo
1061
normal! zc
1222
normal! zo
1223
normal! zo
1223
normal! zc
let s:l = 1054 - ((98 * winheight(0) + 18) / 36)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1054
normal! 01|
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
