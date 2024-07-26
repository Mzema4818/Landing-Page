$(function(){
	var inputs = $('.input');
	var paras = $('.description-flex-container').find('p');
	inputs.click(function(){
		var t = $(this),
				ind = t.index(),
				matchedPara = paras.eq(ind);
		
		t.add(matchedPara).addClass('active');
		inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
	});
});

function updateProgressBar(){
  const {scrollTop, scrollHeight} = document.documentElement;
  const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
  document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
}

document.addEventListener('scroll', updateProgressBar);
