@extends('layouts.app')
@section('yield', 'Om-Os')

@section('content')



<!-- css and js  -->
<link rel="stylesheet" href="{{ asset('front_end/Pris_css/css.css')}}" media="all">
<link href="{{ asset('front_end/Pris_css/potensklinikken.webflow.b91d711e8.min.css')}}" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/" rel="preconnect">
<link href="https://fonts.gstatic.com/" rel="preconnect" crossorigin="anonymous">


<!-- css and js  -->



<div class="page-wrap">
	
	<section class="section-pris-header">
		<div class="page-padding">
			<div class="container-large is-small">
				<div class="padding-bottom padding-xhuge">
					<div class="home-header_component">
						<div id="w-node-_349209d3-ce8d-e944-6e95-4a7ee7a28265-1a1ab18d" class="home-header_content-wrapper-left">
						<div class="margin-bottom margin-xsmall mobile pris">
		
							<div class="text-style-overline mobile s">Center for Erektil Dysfunktion</div>
						</div>
						<div class="margin-bottom margin-medium">
							<h1 class="heading-12">Pris og handelsbetingelser</h1>
						</div>
					</div>
					<div class="margin-bottom margin-xsmall">
						<p class="text-size-medium mobile s">
							<em>Potensklinikken
							er en privatklinik med sundhedsfagligt personale, som specialiserer sig
							i Shockwave Terapi mod erektil dysfunktion. Som info, kan du ikke bruge
							en henvisning i vores klinik. </em>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

</section>



<!-- Behandling -->

<section class="section-pris">
	
	<div class="page-padding">
		<div class="container-large">
			<div class="padding-bottom padding-xhuge">
				<div class="head-blok top">
					<div class="left-blok">
						<div class="text-block-4">
							<strong>Behandling</strong>
						</div>
					</div>
					<div class="right-blok">
						<div class="text-block-5">
							<strong>Pris</strong>
						</div>
					</div>
				</div>
				<div class="head-blok grey">
					<div class="left-blok"><div>
						<strong>Shockwave behandling</strong>
					</div>
					<div class="text-block-10">
						Rejsningsproblemer, Peyronies og andre seksuelle dysfunktioner<br>
					</div>
					<div class="text-block-10">
						Indebærer konsultation og behandling ved første besøg, varighed i alt 60 min. Efterfølgende er behandlingstiden 20 min.
						 <em>‍</em>
						</div>
						<div class="text-block-10">
							<em>(Vælger du ikke at få behandlingen efter konsultationen, opkræves du kr. 500 for konsultationen)</em>
						</div>
					</div>
					<div class="right-blok">
						<div>kr. 850</div>
					</div>
				</div>
				<div class="head-blok">
					<div class="left-blok">
						<div>
							<strong>Klippekort til 6 behandlinger</strong>
						</div>
						<div style="font-weight: 400;">pr. behandling kr. 800</div>
					</div><div class="right-blok">
						<div>kr. 4800</div>
					</div>
				</div>
				<div class="head-blok grey">
					<div class="left-blok"><div>
						<strong>Klippekort til 9 behandlinger</strong>
					</div><div style="font-weight: 400;">pr. behandling kr. 750</div>
				</div>
				<div class="right-blok">
					<div>kr. 6750</div>
				</div>
			</div>
			<div class="head-blok">
				<div class="left-blok">
					<div>
						<strong>Klippekort til 12 behandlinger</strong>
					</div>
					<div style="font-weight: 400;">pr. behandling kr. 700</div>
				</div>
				<div class="right-blok">
					<div>kr. 8400</div>
				</div>
			</div>
		</div>
	</div>
</div>
</section>
<!-- Behandling -->


<!-- FAQ om betaling -->

<section class="section-faq">
	<div id="FAQ" class="page-padding">
		<div class="container-large">
			<div class="padding-huge">
				<div class="w-layout-grid faq6_component">
					<div class="faq6_content">
						<div class="margin-bottom margin-small">
							<h2>FAQ om betaling</h2>
						</div>
					</div>
					<div class="faq6_list">
						<div class="w-layout-grid faq6_list-grid">


							<div class="accordion" id="accordionExample">
								<div class="accordion-item" style="border: 1px solid black;margin-bottom: 20px;">
								  <h2 class="accordion-header" id="headingOne" >
									<button class="accordion-button" type="button" data-bs-toggle="collapse" style="padding: 28px 24px; background-color: transparent; box-shadow: none; color: black;font-weight: 700; font-size: 1.1rem;" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										Hvordan betaler jeg i klinikken?
									</button>
								  </h2>
								  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
									<div style="width: 100%;" class="faq6_answer"><div class="margin-bottom-3 margin-small"><div class="max-width-large"><p style="font-size: 1rem; line-height: 1.65rem;">Vi tager imod Mobilepay eller kontant betaling i klinikken og der afregnes efter endt behandling. Vi tager ikke imod betalingskort.<br></p></div></div></div>
								  </div>
								</div>
								<div class="accordion-item" style="border: 1px solid black;margin-bottom: 20px;">
								  <h2 class="accordion-header" id="headingTwo">
									<button class="accordion-button collapsed"  style="padding: 28px 24px; background-color: transparent; box-shadow: none; color: black; font-size: 1.125rem;" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
										Afbestilling
									</button>
								  </h2>
								  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
									<div style="width: 100%;" class="faq6_answer"><div class="margin-bottom-3 margin-small"><div class="max-width-large"><p style="font-size: 1rem; line-height: 1.65;">Afbud skal ske senest kl. 18:00 dagen før. Ved for sent afbud/udeblivelse opkræves fuld pris for behandlingen. Afbud kan kun ske via email info@potensklinikken.dk eller telefon SKRIV&nbsp;NR. </p></div></div></div>
								  </div>
								</div>
								<div class="accordion-item" style="border: 1px solid black;margin-bottom: 20px;">
								  <h2 class="accordion-header" id="headingThree">
									<button class="accordion-button collapsed"  style="padding:28px 24px; background-color: transparent; box-shadow: none; color: black; font-size: 1.125rem;" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
										Dækning af forsikringsselskab
									</button>
								  </h2>
								  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
									<div style="width: 100%;" class="faq6_answer"><div class="margin-bottom-3 margin-small"><div class="max-width-large"><p style="font-size: 1rem; line-height: 1.65;">Vi er en privatklinik, der leverer behandlingsløsninger uden tilskud fra den offentlige sygesikring eller dit forsikringsselskab. Du står selv for eventuelle indberetninger til forsikringsselskab, og der garanteres ikke for dækning af specialiserede løsninger.</p></div></div></div>
								  </div>
								</div>
								<div class="accordion-item" style="border: 1px solid black;margin-bottom: 20px;"> 
									<h2 class="accordion-header" id="headingfour">
									  <button  class="accordion-button collapsed"  style=" padding:28px 24px; background-color: transparent; box-shadow: none; color: black;" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree" style="background-color: transparent;">
										Klippekort refusion
									  </button>
									</h2>
									<div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
										<div style="width: 100%;" class="faq6_answer"><div class="margin-bottom-3 margin-small"><div class="max-width-large"><p style="font-size: 1rem; line-height: 1.65;">Forudbetalte forløb refunderes ikke, hvis forløbet ikke fuldføres. Forløb skal fuldføres inden for 6 måneder.</p></div></div></div>
									</div>
								  </div> 

							  </div>
						</div>
					</div>
				</div>
			</div>
			</div>
</section>

<!-- FAQ om betaling -->

</div>







@endsection


<!-- bootstrap and jquery link -->
<script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous">
</script>
<!-- bootstrap and jquery link -->


<script src="{{ asset('front_end/Pris_js/webflow.7599426de.js')}}" type="text/javascript"></script>
<script type="text/javascript" async="" src="{{ asset('front_end/Pris_js/js')}}"></script>
<script async="" src="{{ asset('front_end/Pris_js/gtm.js')}}"></script>
<script src="{{ asset('front_end/Pris_js/webfont.js')}}" type="text/javascript"></script>


