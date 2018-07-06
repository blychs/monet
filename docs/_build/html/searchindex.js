Search.setIndex({docnames:["api","index","installing","models","observations","source/modules","source/monet","source/monet.models","source/monet.obs","source/monet.plots","source/monet.util","source/monet.verification","tutorial","tutorial/CMAQ_hi_volcano","tutorial/aqs_pams","tutorial/improve_trends_kmeans","tutorial/loading","tutorial/models","why-monet"],envversion:53,filenames:["api.rst","index.rst","installing.rst","models.rst","observations.rst","source/modules.rst","source/monet.rst","source/monet.models.rst","source/monet.obs.rst","source/monet.plots.rst","source/monet.util.rst","source/monet.verification.rst","tutorial.rst","tutorial/CMAQ_hi_volcano.rst","tutorial/aqs_pams.rst","tutorial/improve_trends_kmeans.rst","tutorial/loading.rst","tutorial/models.rst","why-monet.rst"],objects:{"":{monet:[6,0,0,"-"]},"monet.models":{basemodel:[7,0,0,"-"],camx:[7,0,0,"-"],cmaq:[7,0,0,"-"],hysplit:[7,0,0,"-"]},"monet.models.basemodel":{BaseModel:[7,1,1,""]},"monet.models.basemodel.BaseModel":{check_z:[7,2,1,""],get_var:[7,2,1,""]},"monet.models.camx":{CAMx:[7,1,1,""]},"monet.models.camx.CAMx":{add_files:[7,2,1,""],add_multiple_fields:[7,2,1,""],check_z:[7,2,1,""],get_dates:[7,2,1,""],get_nox:[7,2,1,""],get_pm10:[7,2,1,""],get_pm25:[7,2,1,""],get_var:[7,2,1,""],select_layer:[7,3,1,""]},"monet.models.cmaq":{CMAQ:[7,1,1,""]},"monet.models.cmaq.CMAQ":{add_files:[7,2,1,""],add_multiple_fields:[7,2,1,""],check_z:[7,2,1,""],get_caf:[7,2,1,""],get_clf:[7,2,1,""],get_dates:[7,2,1,""],get_dust_pm25:[7,2,1,""],get_dust_total:[7,2,1,""],get_ec:[7,2,1,""],get_kf:[7,2,1,""],get_metcro2d_rh:[7,2,1,""],get_naf:[7,2,1,""],get_nh4f:[7,2,1,""],get_no3f:[7,2,1,""],get_nox:[7,2,1,""],get_noy:[7,2,1,""],get_pm10:[7,2,1,""],get_pm25:[7,2,1,""],get_so4f:[7,2,1,""],get_var:[7,2,1,""],open_files:[7,2,1,""],select_layer:[7,3,1,""],set_gridcro2d:[7,2,1,""]},"monet.models.hysplit":{HYSPLIT:[7,1,1,""],ModelBin:[7,1,1,""]},"monet.models.hysplit.HYSPLIT":{add_files:[7,2,1,""],get_var:[7,2,1,""],select_layer:[7,3,1,""]},"monet.models.hysplit.ModelBin":{define_struct:[7,3,1,""],readfile:[7,2,1,""]},"monet.monet":{add_aeronet:[6,4,1,""],add_airnow:[6,4,1,""],add_aqs:[6,4,1,""],add_crn:[6,4,1,""],add_improve:[6,4,1,""],add_ish:[6,4,1,""],add_model:[6,4,1,""],add_obs:[6,4,1,""],add_tolnet:[6,4,1,""],combine:[6,4,1,""]},"monet.obs":{aeronet:[8,0,0,"-"],airnow:[8,0,0,"-"],aqs:[8,0,0,"-"],cems:[8,0,0,"-"],crn:[8,0,0,"-"],epa_util:[8,0,0,"-"],improve:[8,0,0,"-"],ish:[8,0,0,"-"],nadp:[8,0,0,"-"],tolnet:[8,0,0,"-"]},"monet.obs.aeronet":{AERONET:[8,1,1,""],dateparse:[8,4,1,""]},"monet.obs.aeronet.AERONET":{add_data:[8,2,1,""],build_url:[8,2,1,""],calc_550nm:[8,2,1,""],dust_detect:[8,2,1,""],get_columns:[8,2,1,""],read_aeronet:[8,2,1,""],set_daterange:[8,2,1,""]},"monet.obs.airnow":{AirNow:[8,1,1,""]},"monet.obs.airnow.AirNow":{add_data:[8,2,1,""],aggregate_files:[8,2,1,""],build_urls:[8,2,1,""],convert_dates_tofnames:[8,2,1,""],filter_bad_values:[8,2,1,""],get_station_locations:[8,2,1,""],get_station_locations_remerge:[8,2,1,""],read_csv:[8,2,1,""],retrieve:[8,2,1,""],set_daterange:[8,2,1,""]},"monet.obs.aqs":{AQS:[8,1,1,""]},"monet.obs.aqs.AQS":{add_data:[8,2,1,""],build_url:[8,2,1,""],build_urls:[8,2,1,""],change_units:[8,3,1,""],get_species:[8,2,1,""],load_aqs_file:[8,2,1,""],retrieve:[8,2,1,""]},"monet.obs.cems":{CEMSEmissions:[8,1,1,""],addmonth:[8,4,1,""],getdegrees:[8,4,1,""]},"monet.obs.cems.CEMSEmissions":{add_data:[8,2,1,""],columns_rename:[8,2,1,""],create_location_dictionary:[8,2,1,""],get_date_fmt:[8,2,1,""],get_var:[8,2,1,""],load:[8,2,1,""],match_column:[8,2,1,""],rename:[8,2,1,""],retrieve:[8,2,1,""]},"monet.obs.crn":{crn:[8,1,1,""]},"monet.obs.crn.crn":{add_data:[8,2,1,""],build_url:[8,2,1,""],build_urls:[8,2,1,""],change_units:[8,2,1,""],check_url:[8,3,1,""],get_monitor_df:[8,2,1,""],load_file:[8,2,1,""],retrieve:[8,2,1,""],set_daterange:[8,2,1,""]},"monet.obs.epa_util":{calc_daily_max:[8,4,1,""],check_cmaq_units:[8,4,1,""],convert_epa_unit:[8,4,1,""],convert_statenames_to_abv:[8,4,1,""],ensure_values_indomain:[8,4,1,""],get_epa_location_df:[8,4,1,""],get_region:[8,4,1,""],read_monitor_file:[8,4,1,""],regulatory_resample:[8,4,1,""],write_table:[8,4,1,""]},"monet.obs.improve":{IMPROVE:[8,1,1,""]},"monet.obs.improve.IMPROVE":{add_data:[8,2,1,""],get_date_range:[8,2,1,""],load_hdf:[8,2,1,""],set_daterange:[8,2,1,""]},"monet.obs.ish":{ish:[8,1,1,""]},"monet.obs.ish.ish":{delimit:[8,2,1,""],get_url_file_objs:[8,2,1,""],read_data_frame:[8,2,1,""],read_ish_history:[8,2,1,""],read_sites:[8,2,1,""],subset_sites:[8,2,1,""]},"monet.obs.nadp":{NADP:[8,1,1,""]},"monet.obs.nadp.NADP":{add_data:[8,2,1,""],build_url:[8,2,1,""],network_names:[8,2,1,""],read_airmon:[8,2,1,""],read_amnet:[8,2,1,""],read_amon:[8,2,1,""],read_mdn:[8,2,1,""],read_ntn:[8,2,1,""],set_daterange:[8,2,1,""]},"monet.obs.tolnet":{TOLNet:[8,1,1,""]},"monet.obs.tolnet.TOLNet":{make_xarray_dataset:[8,3,1,""],open_data:[8,2,1,""]},"monet.plots":{colorbars:[9,0,0,"-"],mapgen:[9,0,0,"-"],plots:[9,0,0,"-"],taylordiagram:[9,0,0,"-"]},"monet.plots.colorbars":{cmap_discretize:[9,4,1,""],colorbar_index:[9,4,1,""],noxcmap:[9,4,1,""],o3cmap:[9,4,1,""],pm10cmap:[9,4,1,""],pm25cmap:[9,4,1,""],rhcmap:[9,4,1,""],so2cmap:[9,4,1,""],sradcmap:[9,4,1,""],tempcmap:[9,4,1,""],wscmap:[9,4,1,""]},"monet.plots.mapgen":{draw_map:[9,4,1,""]},"monet.plots.plots":{eight_hr_spatial_scatter:[9,4,1,""],kdeplot:[9,4,1,""],make_spatial_contours:[9,4,1,""],make_spatial_plot:[9,4,1,""],normval:[9,4,1,""],scatter:[9,4,1,""],spatial:[9,4,1,""],spatial_bias_scatter:[9,4,1,""],spatial_scatter:[9,4,1,""],spatial_stat_scatter:[9,4,1,""],taylordiagram:[9,4,1,""],timeseries:[9,4,1,""],wind_barbs:[9,4,1,""],wind_quiver:[9,4,1,""]},"monet.plots.taylordiagram":{TaylorDiagram:[9,1,1,""]},"monet.plots.taylordiagram.TaylorDiagram":{add_contours:[9,2,1,""],add_sample:[9,2,1,""]},"monet.util":{interp:[10,0,0,"-"],mystats:[10,0,0,"-"],tools:[10,0,0,"-"]},"monet.util.interp":{find_nearest_latlon_xarray:[10,4,1,""],geotiff_meta_to_areadef2:[10,4,1,""],geotiff_meta_to_areadef:[10,4,1,""],get_gfs_area_def:[10,4,1,""],get_grid_def:[10,4,1,""],get_smops_area_def:[10,4,1,""],interp_to_sfc_points:[10,4,1,""],to_constant_latitude:[10,4,1,""],to_constant_longitude:[10,4,1,""]},"monet.util.mystats":{AC:[10,4,1,""],E1:[10,4,1,""],ETS:[10,4,1,""],FB:[10,4,1,""],FE:[10,4,1,""],HSS:[10,4,1,""],IOA:[10,4,1,""],MB:[10,4,1,""],ME:[10,4,1,""],MNB:[10,4,1,""],MNE:[10,4,1,""],MNPB:[10,4,1,""],MNPE:[10,4,1,""],MO:[10,4,1,""],MP:[10,4,1,""],MdnB:[10,4,1,""],MdnE:[10,4,1,""],MdnNB:[10,4,1,""],MdnNE:[10,4,1,""],MdnNPB:[10,4,1,""],MdnNPE:[10,4,1,""],MdnO:[10,4,1,""],MdnP:[10,4,1,""],NMB:[10,4,1,""],NME:[10,4,1,""],NMPB:[10,4,1,""],NMPE:[10,4,1,""],NMdnB:[10,4,1,""],NMdnE:[10,4,1,""],NMdnPB:[10,4,1,""],NMdnPE:[10,4,1,""],NO:[10,4,1,""],NOP:[10,4,1,""],NP:[10,4,1,""],PSUTMNPB:[10,4,1,""],PSUTMNPE:[10,4,1,""],PSUTMdnNPB:[10,4,1,""],PSUTMdnNPE:[10,4,1,""],PSUTNMPB:[10,4,1,""],PSUTNMPE:[10,4,1,""],PSUTNMdnPB:[10,4,1,""],PSUTNMdnPE:[10,4,1,""],R2:[10,4,1,""],RM:[10,4,1,""],RMSE:[10,4,1,""],RMSEs:[10,4,1,""],RMSEu:[10,4,1,""],RMdn:[10,4,1,""],STDO:[10,4,1,""],STDP:[10,4,1,""],USUTPB:[10,4,1,""],USUTPE:[10,4,1,""],WDAC:[10,4,1,""],WDIOA:[10,4,1,""],WDMB:[10,4,1,""],WDME:[10,4,1,""],WDMdnB:[10,4,1,""],WDMdnE:[10,4,1,""],WDRMSE:[10,4,1,""],circlebias:[10,4,1,""],d1:[10,4,1,""],matchedcompressed:[10,4,1,""],matchmasks:[10,4,1,""],scores:[10,4,1,""],stats:[10,4,1,""]},"monet.util.tools":{findclosest:[10,4,1,""],kolmogorov_zurbenko_filter:[10,4,1,""],linregress:[10,4,1,""],long_to_wide:[10,4,1,""],search_listinlist:[10,4,1,""],wsdir2uv:[10,4,1,""]},"monet.verification":{combine:[11,0,0,"-"],interpolation:[11,0,0,"-"],verify:[11,0,0,"-"]},"monet.verification.combine":{check_units:[11,4,1,""],combine:[11,4,1,""],combine_model_obs:[11,4,1,""],get_mapping_table:[11,4,1,""],get_model_fields:[11,4,1,""],merge_obs_and_model:[11,4,1,""]},"monet.verification.interpolation":{find_nearest_latlon_xarray:[11,4,1,""],geotiff_meta_to_areadef2:[11,4,1,""],geotiff_meta_to_areadef:[11,4,1,""],get_gfs_area_def:[11,4,1,""],get_grid_def:[11,4,1,""],get_smops_area_def:[11,4,1,""],interp_latlon:[11,4,1,""],to_constant_latitude:[11,4,1,""]},"monet.verification.verify":{VERIFY:[11,1,1,""]},"monet.verification.verify.VERIFY":{compare_epa:[11,2,1,""],compare_epa_spatial:[11,2,1,""],compare_spatial:[11,2,1,""],compare_surface:[11,2,1,""],point:[11,2,1,""],subset_epa:[11,3,1,""]},monet:{models:[7,0,0,"-"],monet:[6,0,0,"-"],obs:[8,0,0,"-"],plots:[9,0,0,"-"],util:[10,0,0,"-"],verification:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:function"},terms:{"000000e":14,"003000e":14,"006215e":14,"011792e":14,"018000e":14,"070852e":14,"091979e":14,"0x1c1e7f0f28":14,"0x1c26997d30":13,"0x1c27451d00":13,"0x1c277f9940":13,"0x1c27910860":13,"0x1c280473b8":13,"0x1c286eb4a8":15,"0x1c290de080":15,"0x1c290e94a8":13,"0x1c29bd5fc0":13,"0x1c29e9afc0":13,"0x1c2a71f198":13,"0x1c2ae207b8":13,"0x1c2b0ead00":13,"0x1c2b1d1320":13,"0x1c2b43c5f8":13,"0x1c2bb1f860":14,"0x1c47460f60":14,"100000e":14,"105874e":14,"10m":[9,13,14],"110000e":14,"12e3":[10,11],"165860e":14,"17t12":13,"17t13":13,"1e5":8,"1st_max_hour":14,"1st_max_valu":14,"2018620155016911q1n0mq":15,"20186258419212m0xuxu":15,"219583e":14,"223728e":14,"2390e":14,"255642e":14,"260000e":14,"280000e":14,"300000e":14,"336468e":14,"33e":14,"393782e":14,"404985e":14,"474708e":14,"478e":14,"493500e":14,"500nm":8,"501618e":14,"5_frm":[4,16],"600000e":14,"685583e":14,"740000e":14,"764996e":14,"800000e":14,"833e":14,"854257e":14,"8hr":[4,16],"959000e":14,"966935e":14,"978275e":14,"982000e":14,"993263e":14,"997000e":14,"997054e":14,"boolean":8,"byte":7,"case":[4,8,14,15],"class":[4,7,8,9,11,14,16],"default":[4,6,8,9,10,11,15,16],"function":[3,4,8,9,13,14,16],"import":[3,4,13,14,15,16,17],"int":9,"long":[4,14,15,16],"new":[2,8,13,14],"op\u00e9rationnel":[4,16],"photom\u00e9tri":[4,16],"public":[4,16],"return":[3,4,6,7,8,9,10,11,13,16,17],"short":[6,7,8,9,10,11],"static":[7,8,11,18],"true":[4,7,8,9,11,13,14,15,16],"try":[7,14,15],"var":[3,10,11,13],AND:14,AQS:[1,8,12,15],Adding:13,But:14,CIS:14,ETS:10,For:[1,3,4,7,14,16],NEAR:[4,16],Not:[13,14],OLS:14,Obs:[9,11],RMS:9,The:[2,3,4,7,8,13,14,15,16,17],There:[4,13,14,15,16],These:[7,15],Use:13,Uses:8,__class__:8,__init__:8,__path__:[3,17],_collections_abc:13,_map:13,_setitem_with_index:[14,15],_subplot:[13,14,15],a25i:[3,13],a25j:[3,13],abbrevi:8,abl:[1,3,4,13,14,16,17],about:[4,8,9,16],abov:[4,16],absorpt:[4,16],acad1:15,accept:[4,11,16],access:[4,16],acetaldehyd:14,aceton:14,acetonitril:14,acetylen:14,acid:4,acli:[3,13],aclj:[3,13],aconc:[3,13,17],acp:8,acrolein:14,across:[4,14],acryl:14,acrylonitril:14,act:[4,16],action:[4,16],actual:14,add:[1,4,8,9,13,14,15,16],add_aeronet:6,add_airnow:6,add_aq:6,add_contour:9,add_crn:6,add_data:[4,8,13,14,15,16],add_fil:7,add_improv:6,add_ish:6,add_meta:[8,15],add_model:6,add_multiple_field:7,add_ob:6,add_sampl:9,add_tolnet:6,adding:8,addit:[4,8,15,16],addmonth:8,addon:9,address:14,adj:14,adjust:15,aeci:[3,13],aecj:[3,13],aerocan:[4,16],aeroent:[4,16],aeronet:[1,5,6],aerosol:[4,8,15,16],aerospan:[4,16],africa:[4,16],after:[2,15],again:13,agenc:[4,16],aggreg:[4,13,16],aggregate_fil:8,aggrig:13,agreement:10,agricultur:14,ah2oi:[3,13],ah2oj:[3,13],ahead:15,aic:14,aid:[4,14,15,16],aim:1,air:[1,3,4,16,17],air_temperatur:8,airdata:[4,14,16],airmon:4,airnow:[1,5,6,12,15],airnow_flag:14,airnowu:[4,16],airtoxschool:[4,16],albedo:[4,16],ald2:[3,13],alf:15,algorithm:15,all:[3,4,7,8,11,14,16],allow:[4,14],alm15:[4,16],alm20:[4,16],almucantar:[4,16],along:[4,14,16],alpha:[8,9,11],alreadi:13,also:[3,4,8,13,14,15,16,17],alwai:2,amazon:[4,16],ambient:[4,16],amnet:4,amon:4,amount:4,amtic:[4,16],amyl:14,anaconda3:[13,14,15],anai:[3,13],anaj:[3,13],analys:15,analysi:[1,12,18],analyz:1,anh4i:[3,13],anh4j:[3,13],ani:[4,8,13,15,16],ano3i:[3,13],ano3j:[3,13],anomali:10,anoth:4,anyth:13,aod10:[4,16],aod15:[4,8,16],aod20:[4,16],aod500:8,aod550:8,aod:[1,8],aod_1020:8,aorgai:[3,13],aorgaj:[3,13],aorgbi:[3,13],aorgbj:[3,13],aorgpai:[3,13],aorgpaj:[3,13],aot:[4,16],api:[1,14],append:8,appendix:8,applic:[4,16],aqf_hi:3,aqi:[4,14,16],aqm:[3,13,17],aqs:[4,5,6,14,16],aqs_param:[8,11],aqsweb:[4,14,16],arang:9,arcco:9,area:[4,10,11,16],area_def:[10,11],areadefinit:[10,11],arg:9,argument:[10,11],arizona:15,arl:[2,8,14],arr:[10,11],arrai:[2,3,4,7,13,16,18],array1:10,array2:10,arris:0,ascend:13,ascii:[4,16],asf:15,asi:[4,16],ask:[0,1],aso4i:[3,13],aso4j:[3,13],aspx:[8,15],assess:[4,16],assist:[3,4,16],assum:[4,8,13,14,16],assur:[4,16],asymmetri:[4,16],atlant:14,atmospher:[1,4],att:8,attain:[4,16],attribut:[3,8],autom:4,auxilari:15,avail:[1,2,3,8,14],averag:[13,14],avg:[4,16],awai:4,axes:[13,14,15],axessubplot:[13,14,15],axi:10,back:13,bad:13,baker:1,barb:11,barbs_arg:11,barri:[1,13,14,15],base:[4,7,8,9,11,16],basemap:9,basemodel:[5,6],baseurl:8,basic:4,befor:15,begin:[4,7,8,14,16],behavior:13,below:[7,10],benzen:14,benzyl:14,bera:14,better:[2,4,13,14,15,16],between:[14,18],bia:[1,10],bic:14,binari:7,block:7,bool:9,both:13,bottl:4,bottleneck:2,box:[4,8,16],brf:15,bromochloromethan:14,bromodichloromethan:14,bromoform:14,bromomethan:14,build:[2,8,13],build_url:8,butadien:14,butan:14,buten:14,butyl:14,bytes_:7,ca2:4,cad:[4,16],caf:15,calc_550:8,calc_550nm:8,calc_daily_max:8,calcul:8,calibr:[4,16],call:[4,7,13,14],camx:[1,5,6],can:[1,2,3,4,8,13,14,15,16],canada:4,cannot:13,capabl:[1,3,17],carbon:14,carolina:[4,16],carsnet:[4,16],cartopi:[2,4,13,14,16],castnet:[4,16],caveat:[14,15],cbar_kwarg:13,cbsa_nam:14,ccc:8,ccr:[4,13,14,16],cdate:3,cdump:7,celsiu:8,cem:[1,5,6],cemsemiss:8,center:[4,9,14,15,16],centuri:7,cesnulyt:8,cfeatur:[4,14,16],cfm:[4,16],cfr:8,chang:[8,13],change_unit:8,channel:2,char4:7,character:[4,16],charg:4,check:[4,16],check_cmaq_unit:8,check_unit:11,check_url:8,check_z:7,chem:1,chemic:[4,14,16],chemistri:4,chlf:15,chlorid:14,chlorobenzen:14,chloroethan:14,chloroform:14,chloromethan:14,chloropren:14,chloropropen:14,chunksiz:[3,13],cira:[4,8,15,16],circlebia:10,citi:[8,11,14],city_nam:14,clean:[4,14,16],clf:15,climat:[1,8],clip:13,clone:2,cloud:[4,16],cluster:[1,12],cm_calcul:15,cmap:[9,13],cmap_discret:9,cmaq:[1,5,6,8,9,12],cmaqfil:[3,17],cmatch:8,cmsa_nam:[13,14],cne:[4,16],cnr:[4,16],coastlin:9,cocenctr:7,code:[0,1,8],code_obj:14,coef:14,coeffici:10,coincid:[4,16],col1:9,col2:9,col:[8,9,13],col_wrap:13,collabor:[4,16],collect:[4,13,14,16],collecting_ag:14,collector:4,color:[2,4,9,13,14,16],colorbar:[5,6,13],colorbar_index:9,colormap:9,colost:[4,8,15,16],colstat:15,columbia:14,column:[8,13,14,15],columns_renam:8,com:[1,2,15],combin:[1,5,6,13,18],combine_model_ob:11,comma:8,command:[2,4,9,15,16],commerci:14,common:[1,3,18],commun:[1,2,4,16],compar:13,compare_epa:11,compare_epa_spati:11,compare_spati:11,compare_surfac:11,comparison:14,compat:[3,13,15,17],complet:[4,7,13,14,16],compos:4,composit:[1,3,4,14,16,17],compound:14,comput:[1,4,16],conc:[4,13],concentr:[3,4,7,13,14,16],cond:14,conda:2,confid:10,configur:14,congress:[4,16],connect:4,constant:9,contain:[4,8,10,11,16],content:[0,5],continu:[4,8,9,16],contour:[1,9,12],contourf:13,contractor:[4,16],control:[4,14,16],conveni:[1,4,16],convert:[7,8,13],convert_dates_tofnam:8,convert_epa_unit:8,convert_statenames_to_abv:8,coordin:[3,13],copi:[4,14,15,16],core:[14,15,18],corrcoef:9,corrcoeff:9,correctli:14,correl:[1,9,10,13],correspond:8,could:14,count:14,countri:[8,9],county_cod:14,county_nam:14,covari:14,creat:[1,4,8,14,16],create_cbar:9,create_location_dictionari:8,crf:15,crn2:13,crn:[1,5,6],crno:13,cron:13,cross:13,crpx:13,crs:[4,13,14,16],crx_vn:8,csn:[4,16],csv:[8,13,14],ctime:3,cuf:15,current:[1,2,4,8,16],curv:14,cwd:8,cyclohexan:14,cyclopentan:14,d_df:8,dai:[4,8,16],daili:[4,6,11,14,16],daily_44201_2004:14,daily_vocs_2004:14,dask:[2,3,13],data:[1,3,4,6,7,9,12,13,18],data_valu:8,dataarrai:[3,11],databas:1,datafram:[4,8,13,14,15,16],dataset:[3,4,8,11,13,14,15,16,17,18],datastream:[3,17],datawizard:[8,15],date1:7,date2:7,date:[2,3,4,6,7,8,9,11,13,14,15,16],date_of_last_chang:14,date_rang:[4,14,16],datepars:8,daterang:8,datestr:8,datetim:[4,7,8,16],datetime64:[3,13],datum:14,decan:14,decimal_degre:8,decod:7,defin:[4,7,15,16],define_struct:7,definit:[10,11],degre:8,delimit:[8,15],demonstr:17,dep:14,depend:[1,4,16],depolar:[4,16],deposit:4,depth:[4,16],deriv:[3,4,16],describ:[4,14,16],descript:[4,6,7,8,9,10,11,14,16],design:[1,4,8],desktop:[13,14,15],despin:14,detect_dust:8,determin:[4,8,10,16],develop:[1,3,14,17],deviat:[4,9,10,16],dew:[4,16],df1:15,df2:[4,16],df_so2:13,dfkm:15,dfn:11,dia:[9,11],diagram:9,dibromid:14,dibromochloromethan:14,dichlorid:14,dichlorobenzen:14,dichlorodifluoromethan:14,dichloroethan:14,dichloroethen:14,dichloroethylen:14,dichloromethan:14,dichloropropan:14,dichloropropen:14,dictionari:[8,10,11],diethylbenzen:14,differ:[1,3,8,9,14,15,17],difficult:2,diffpdf:11,diffscatt:11,digit:7,dimens:[3,13],dimension:[3,18],dimethylbutan:14,dimethylpentan:14,direct:[4,10,14,16],directli:[2,8,9,13],directori:13,discret:[9,11],disk:[4,16],displai:17,dissolv:4,distribut:[4,13,16],district:14,disulfid:14,divers:[4,16],divis:[4,16],djet:9,dmc:[4,16],dmdnload:8,doc:[14,15],document:[14,15],doesn:13,doi:15,domain:[4,16],done:[2,14],dot:13,dowload:[4,16],download:[2,4,6,8,13,14,15,16],download_fil:14,dpi:9,drang:7,draw_map:[3,9,13,14],drop:[2,14,15],drop_latlon:8,dropna:[13,14,15],dset:[3,7,8,13,17],dtype:[7,9,14],dtypewarn:14,dubovik:8,durbin:14,dure:4,dust:15,dust_detect:8,each:[4,7,8,16],easi:[1,18],easier:14,easiest:2,easili:1,ec1f:15,ec2f:15,ec3f:15,ecf:15,edgecolor:[11,13,15],edu:[4,8,15,16],effect:[4,16],effici:[10,18],efil:8,eight_hr_spatial_scatt:9,either:[4,8,16],elev:[14,15],els:7,emiss:8,enclosur:4,encount:13,end:[4,7,8,14,16],england:14,ensur:4,ensure_values_indomain:8,entir:[4,16],environ:2,epa:[1,3,8,11,14,15,17],epa_region:[8,11,13,14],epa_util:[5,6],epacod:15,epaid:15,equit:10,err:14,error:[10,14],erupt:[3,13,17],establish:[4,16],ethan:14,ether:14,ethyl:14,ethylbenzen:14,ethylen:14,ethyltoluen:14,evalu:[1,4,16],event_typ:14,everi:[13,14],exampl:[1,3,4,9,12,14,15,16,17],excel:18,except:[4,13,16],exec:14,exec_id:3,exist:13,expand:[4,8,16],explan:[4,16],expos:4,exposur:4,extent:[9,13,14],extinct:[4,16],extra:8,extract:17,extrapol:8,extrem:13,fac_id:8,facil:[4,8,16],fact:9,factor:[4,16],fals:[4,6,7,8,9,11,14,15,16],featur:[0,1,4,14,16],fed:[8,15],feder:[4,16],fef:15,few:[14,15],field:[8,15],fig:9,figsiz:[13,14,15],figur:[9,14,15],file:[3,4,7,8,13,14,15,16,17],file_object:8,filedesc:3,filelist:8,filenam:[7,8],fill:7,fillarg:[9,11],fillra:7,filter:15,filter_bad_valu:8,find:[1,8,12,14,15],find_nearest_latlon_xarrai:[10,11,13],findclosest:10,findkei:[7,11],fine:15,first:[3,4,8,13,14,15,16,17],first_year_of_data:14,fit:[14,15],fit_df:14,five:4,fix:13,flag:[4,13,16],flat:13,flist:[3,7,13,17],float32:[3,13],flux:[4,16],flx:[4,16],fmt:8,fname:[6,8],fnll:13,follow:[2,4,7],footer:11,forc:[4,16],forecast:[1,4,16],forg:2,form:[3,10,11,13],formaldehyd:14,format:[3,4,8,14,15,16,17,18],fortran:7,forward:13,found:[1,4,8,13,14,15,16],fraction:10,frame:8,frc:[4,16],freon:14,freq:[4,8,16],from:[1,2,3,4,7,8,9,12,13,15,16,17],ftp:8,ftype:3,funnel:4,further:[1,15],futur:[4,16],futurewarn:13,fv3:1,gage:4,galleri:1,gather:13,gdnam:3,gdtyp:3,gener:[13,14],geograph:[4,14,16],geometri:[10,11],geotiff:[10,11],geotiff_meta_to_areadef2:[10,11],geotiff_meta_to_areadef:[10,11],get:[3,4,8,13,14,15,16],get_caf:7,get_clf:7,get_clim:13,get_cmap:13,get_column:8,get_dat:7,get_date_fmt:8,get_date_rang:8,get_dust_pm25:7,get_dust_tot:7,get_ec:7,get_epa_location_df:8,get_gfs_area_def:[10,11],get_grid_def:[10,11],get_kf:7,get_mapping_t:11,get_metcro2d_rh:7,get_model_field:11,get_monitor_df:8,get_naf:7,get_nh4f:7,get_no3f:7,get_noi:7,get_nox:7,get_pm10:7,get_pm25:7,get_region:8,get_smops_area_def:[10,11],get_so4f:7,get_speci:8,get_station_loc:8,get_station_locations_remerg:8,get_url_file_obj:8,get_var:[3,7,8],getdegre:8,git:2,github:[0,1,2,13,14],give:[8,13,14],given:[4,16,18],glass:4,global:[4,16],gmt_offset:14,goal:1,goe:13,going:[4,15,16],good:[13,15],gov:[4,8,9,14,16],grdcro2d:[3,13,17],grddot2d:13,greatli:[4,16],grid:[3,7,13,17],gridcro2d:[3,17],gridobj:9,gross:10,ground:[4,16],group:[1,4,16],gsfc:[4,16],guess:7,handl:8,hard:13,has:[4,16],have:[3,4,8,13,14,15,16],hawaiian:[3,13,17],hdf:14,head:[4,13,14,15,16],heidk:10,help:1,helper:[3,4,8,13,14,16],heptan:14,here:[7,8,13,14,15,17],hexachlorobutadien:14,hexan:14,hhmm:8,high:13,histori:[3,8],hno3:[3,13],hono:[3,13],horizont:13,host:[4,16],hour:[8,13],hourli:[4,8,16],hourly_44201_2018:[4,16],hous:4,how:[1,4,12,16,17],hss:10,htm:9,html:[4,8,14,15,16],http:[2,4,8,9,13,14,15,16],humid:[4,16],hydrochlor:4,hysplit:[1,5,6],idea:[4,16],ident:8,identif:8,imag:[10,11],imaginari:[4,16],implement:[4,9,16],impos:[4,16],improv:[1,5,6,12,16],imshow:9,imshow_arg:11,inch:4,includ:[1,3,4,8,13,14,15,16],incovini:[4,16],index:[0,1,4,10,14,15,16],indic:8,indici:[4,16],individu:[4,16],info:8,inform:[2,4,8,10,11,14,15,16],inhous:8,inplac:8,input:[7,11],insensit:4,insid:13,instal:1,instanc:[4,9,16],instead:13,institut:[4,16],instruct:1,instrument:[4,16],insu:[4,16],insul:4,int32:[3,13],integ:15,integr:1,interactiveshel:14,interp:[5,6],interp_latlon:11,interp_to_sfc_point:10,interpol:[5,6,13,18],introduc:1,intuit:[4,16],inv_typ:[4,8,16],invalid:13,ioa:10,ioapi:[3,17],ioapi_vers:3,ish:[1,5,6],isn:13,isobutan:14,isobutyl:14,isop:14,isopentan:14,isopren:14,isopropylbenzen:14,issu:0,iter:[8,10,13],iterat:8,its:[4,16],itself:2,jarqu:14,jet:9,john:13,jun:14,just:[14,15],kdeplot:[9,13],keep:[4,8,16],kei:8,keton:14,kmean:[1,12],known:[4,16],kolmogorov:15,kolmogorov_zurbenko_filt:10,kurtosi:14,kwarg:[4,6,8,9,11,13,14,16],label:[8,9,11,13,14,15],labels_:15,lai:[7,11],land_us:14,larg:13,last:[7,8],lat:[1,8,10,11,12],lat_max:9,lat_min:9,later:[2,4,13,14,15,16],latest:13,latitud:[3,4,8,13,14,15,16],latlonbox:[4,6,8,16],latmax:[4,8,16],latmin:[4,8,16],learn:[1,12,13],least:14,legend:[14,15],len:13,length:7,less:[4,16],less_equ:13,let:[3,4,13,14,15,16,17],letter:8,level:[4,9,16],leverag:[1,8],lib:[13,14,15],librari:[3,4,13,14,15,16],lid:[4,16],lidar:[4,16],like:[4,13],likelihood:14,lill:[4,16],limit:4,line2d:[13,14],line:[8,13,14],linear:[13,14],linregress:10,list:[3,8,10],littl:13,live:13,llnl:9,load:[1,7,8,12,13,14,18],load_aqs_fil:8,load_fil:8,load_hdf:8,loc:[8,13,15],local:[4,8,16],local_site_nam:14,locat:[4,16],location_set:14,log:14,lognorm:13,logscal:13,lon:[1,8,10,11,12],lon_max:9,lon_min:9,long_to_wid:[10,14,15],longitud:[3,4,8,13,14,15,16],longterm:4,lonmax:[4,8,16],lonmin:[4,8,16],look:[4,7,8,13,14,15,16],loop:[8,14],loss:4,lot:14,low:13,low_memori:14,lst_date:8,lst_time:8,mai:[2,4,8,13,14,15,16],maintain:2,make:[13,14,15],make_spatial_contour:9,make_spatial_plot:9,make_xarray_dataset:8,manag:[4,16],mandat:[4,16],mani:14,manner:13,manual:2,map:[1,2,3,4,8,12,14,16],mapgen:[3,5,6,13],mapping_dict:7,mapping_t:[11,13],marker:[9,11],mask:13,mass:13,match_column:8,matchedcompress:10,matchmask:10,matplotlib:[2,4,13,14,15,16],matrix:14,max:[4,13,14,16],maximum:[4,16],maxval:[9,10],mdl:15,mdn:1,mdnb:10,mdne:10,mdnnb:10,mdnne:10,mdnnpb:10,mdnnpe:10,mdno:10,mdnp:10,mean:[2,4,10,13,14,15,16],measur:[1,14,15,18],media:[4,16],median:10,mercuri:4,merge_obs_and_model:11,meta:[1,10,11,13,15],meteorolog:[1,4,14,16],methacryl:14,methan:14,method:[1,7,8,14],method_cod:14,method_nam:14,methyl:[4,14],methylcyclohexan:14,methylcyclopentan:14,methylheptan:14,methylhexan:14,methylpentan:14,metric:1,mfile:7,mg2:4,mgf:15,microphys:[4,16],mid:14,min:[13,14],min_period:15,minut:8,minval:[9,10],mix:14,mnb:10,mne:10,mnf:15,mnpb:10,mnpe:10,mod:10,mod_hat:10,model:[5,6,8,9,10,11,13,14,18],model_param:11,model_tim:11,modelbin:7,modelvar:9,modif:4,modifi:[4,10],modul:[0,1,5,14,15],modular:1,monet:[0,2,3,4,13,14,15,16,17],monitor:[4,8,14,16],monitor_df:8,monitor_fil:8,monitor_typ:14,monitoring_site_loc:14,month:[8,14],monthli:[14,15],more:[1,2,4,8,13,14,15,16,17],most:[13,14],msa_cod:[13,14],msa_nam:[13,14],much:13,multipl:[1,8],multipli:8,multiscal:1,must:[2,4,8,16],mystat:[5,6],n2f:15,n2o5:[3,13],n_cluster:15,nadp:[1,5,6],naf:15,name:[3,4,7,8,13],namehash:8,nan:[13,14,15],naqfc:1,nasa:[4,16],nation:[1,4,16],natt:[4,16],natural_earth:9,nc_state:8,ncdc:8,ncdump:[3,13],ncf:[3,13,17],ncol:3,ncolor:[9,11],ncore:[4,16],ne_stat:8,nearest:[1,12],nearroad:[4,16],need:[2,4,7,8,14,15,16,18],neighbor:13,net:4,netcdf4:2,network:[1,6,8,14,15],network_nam:8,newftp:8,newnam:8,nh4:4,nlai:3,nmb:10,nmdnb:10,nmdne:10,nmdnpb:10,nmdnpe:10,nme:10,nmoc:14,nmpb:10,nmpe:10,no2:[3,4,13,14,16],no3:[3,4,13],noaa:[1,2,8],noi:[11,13],noisi:14,non:[4,14,16],nonan:14,none:[6,7,8,9,10,11],nonoxnoi:[4,16],nonrobust:14,nop:10,norm:13,normal:[8,10,13],normalis:[4,16],normval:9,north:[4,16],north_centr:11,northeast:11,northern:[4,16],note:15,notic:[13,14],now:[4,13,14,15,16],nox:[3,4,11,13,14,16],noxcmap:9,nrow:3,nthik:3,ntn:[1,8],ntr:[3,13],numacc:[3,13],numatkn:[3,13],number:[8,9,15],numpi:[2,4,7,13,14,15,16],nvar:3,o3cmap:9,oar:2,object:[3,4,6,7,8,9,10,11,13,17],objtyp:8,obs:[4,5,6,9,10,11,13,14,15,16],obscolumn:8,obscur:14,obsdata:[5,6],observ:[10,12,14,16,18],observation_count:14,observation_perc:14,obstyp:11,obsunit:11,octan:14,offic:[4,16],often:[13,14],ohm:8,ojbect:7,older:2,omnibu:14,onc:13,one:[4,8,16],onli:[2,4,8,13,14,16],onto:15,opaconc:3,opan:13,open:[1,3,4,7,8,12,15,18],open_data:8,open_fil:[3,7,13,17],openaq:1,oper:[4,16],optic:[4,16],option:[8,14,15],order:1,org:[14,15],organ:14,orient:13,origin:[3,8],orispl:8,other:[4,8,14,15,16],our:[1,15],out:[7,8,15],outlet:[4,16],outlin:13,output:[1,3,7,8,17],outreach:[4,16],outsid:[4,16],over:[4,8,13,14,16],overlai:[1,12],overlap:13,overview:1,ozon:[4,8,11,13,14,16],ozone_ppb:14,p_alp:3,p_bet:3,p_calc:8,p_daily_calc:8,p_gam:3,p_state:8,pacif:11,packag:[0,1,2,5,13,14,15],pad:7,page:[0,1,2,13,14],pair:[1,10,12],palett:[2,4,14,16],pam:[1,4,12,16],pamsmain:[4,16],pan:[1,3,13],panda:[1,2,4,8,13,14,15,16,18],panx:13,parallel:1,param:[4,6,7,8,10,11,14,16],paramet:[6,7,8,9,10,11,15],parameter_cod:14,parameter_nam:14,park:[4,16],part:8,particular:8,partner:[4,16],pass:15,path:[3,14,17],pathcollect:[13,14],paxi:10,pcmdi:9,pdf:[11,15],peak:10,pentan:14,penten:14,percent:4,perfect:10,perform:[13,18],period:4,pfn:[4,16],phase:[4,16],phoe1:15,phoenix:15,photochem:[3,17],photon:[4,16],pip:2,pivot:14,plan:[2,4,16],plant:8,platecarre:13,platform:1,pleas:[0,1,14],plot:[1,3,4,5,6,11,12,15,16,18],plot_typ:11,plotarg:[9,11],plt:[4,13,14,15,16],pm10:[4,13,15,16],pm10cmap:9,pm10spec:[4,16],pm25:[3,13],pm25cmap:9,pm2:[3,4,11,13,15,16],pna:[3,13],poc:[8,14,15],point:[1,4,11,12,15,18],polar:9,politc:[4,14,16],pollut:[4,16],pollutant_standard:[8,14],port:2,portal:[4,16],post:0,pour:[4,16],power:8,ppb:[8,13],ppbv:13,ppmv:13,precipit:[4,8,16],predict:[10,14],predominantli:4,prepar:[4,16],preprocess:15,preserv:[4,13],pretti:13,print:[3,7,8,14],prob:14,proce:13,procedur:4,process:[1,4,16],product:8,program:[4,16],project:[1,4,10,11,13,14,16],propag:9,propan:14,properti:[4,13,16],propylbenzen:14,propylen:14,proven:18,provid:[1,4,16,18],pseudonetcdf:2,psutmdnnp:10,psutmdnnpb:10,psutmnp:10,psutmnpb:10,psutnmdnp:10,psutnmdnpb:10,psutnmp:10,psutnmpb:10,publish:2,pure:2,put:[11,13,15,18],pydata:[14,15],pynio:2,pyplot:[4,13,14,15,16],pyresampl:[2,10,11,13],python3:[13,14,15],python:[1,2,7,8,14,18],qcdataset:8,quadmesh:13,quadrant:9,qualiti:[1,4,16],question:[0,1,15],quick:[1,12],quickli:[3,17],quit:14,r_state:8,radi:[4,16],radiat:[4,16],radiu:[4,10,11,16],raingag:4,random:13,rang:[7,10,14,15],rasterio:[10,11],rather:[4,13,16],ratio:[4,10,16],raw:[4,15,16],rcolumn:8,rdate:8,rdbu_r:9,rdylbu_r:9,read:[1,3,4,7,8,12,13,15,16,17],read_aeronet:8,read_airmon:8,read_amnet:8,read_amon:8,read_csv:8,read_data_fram:8,read_ish_histori:8,read_mdn:8,read_monitor_fil:8,read_ntn:8,read_sit:8,readfil:7,readili:[4,16],readthedoc:[13,14],readwrit:7,real:[4,16],realli:13,realtim:[4,16],recommend:2,record:[4,7,16],rect:9,reduc:4,refer:[2,8,9],reformat:15,refract:[4,16],refstd:9,regim:[4,16],region:[4,8,11,16],regress:14,regulatory_resampl:8,rel:[4,16],relat:1,relative_humid:8,releas:2,remot:[4,16],renam:8,renameddcol:8,renamedhcol:8,replac:4,report:[4,16],repositori:[4,16],repres:[7,15],reprocess:14,requir:[1,13,15],rerturn:8,resampl:[8,13,14,15],resdat:13,research:[1,4,16],reshap:[4,14,16],resid:[4,16],residenti:14,residu:14,resiz:9,resolut:[9,13,14],result:[14,17],retain:3,retriev:[1,4,8,14,16,18],retriv:[4,16],rh_daily_avg:8,rh_daily_max:8,rh_daily_min:8,rh_flag:8,rh_hr_avg:8,rh_hr_avg_flag:8,rhcmap:9,rhdp:[4,16],right:13,rima:[4,16],rin:[4,16],rmdn:10,rmse:[10,18],rmseu:10,road:[4,16],robot:[4,16],robust:[13,14],robustscal:15,rocki:11,roll:15,rolling_frequ:8,root:10,routin:[1,8],row:[8,14,15],rtp:[4,16],rtype:8,run:18,runtimewarn:13,rural:14,sai:[4,14,16],same:4,sampl:[4,9],sample_dur:14,satellit:[4,16,18],satellitair:[4,16],save:14,savecol:8,savenam:9,sc_state:8,scale:[4,13,15,16],scan:[4,16],scatter:[1,4,9,11,13,14,15,16],scatter_arg:11,scenc:13,school:[4,16],scientif:1,scientist:[4,16],scikit:[1,12],score:[1,10],screen:[4,16],sda10:[4,16],sda15:[4,16],sda20:[4,16],sda:1,sdate:3,se_stat:8,seaborn:[2,4,13,14,16],search:[0,1],search_listinlist:10,searchabl:1,second:8,section:[4,13,16],see:[2,8,13,14,15],sel:13,select:15,select_lay:7,self:[6,7,8,13,14,15],sens:[4,16],sensit:8,separ:[8,15],seper:[4,13,16],seri:[8,14,18],server:[4,13,16],servic:[4,16],set:[3,4,8,14,15,16,17],set_context:14,set_daterang:8,set_gridcro2d:7,set_styl:14,settingwithcopywarn:[14,15],setup:2,sever:[1,3,4,8,13,16,17],shape:[3,13,14],should:[7,8],show:14,sif:15,signal:15,simpl:[4,14,16],simpli:[3,4,15],simul:[1,3,12,17],sinc:8,singl:[3,4,8,9,11,16],site:[1,4,8,11,13,14,15],site_num:14,siteid:[8,13,14,15],siz:[4,16],size:[4,13,14,16],skew:14,skill:[1,10],skinni:[8,15],sklearn:15,sky:[4,16],slam:14,slh:4,slice:[13,14,15],sns:[4,13,14,16],so2:[3,4,8,11,13,16],so2_now:13,so2_resampl:13,so2cmap:9,so42:4,so4:4,soil_moisture_100:8,soil_moisture_100_daili:8,soil_moisture_10:8,soil_moisture_10_daili:8,soil_moisture_20:8,soil_moisture_20_daili:8,soil_moisture_50:8,soil_moisture_50_daili:8,soil_moisture_5:8,soil_moisture_5_daili:8,soil_temp_100:8,soil_temp_100_daili:8,soil_temp_10:8,soil_temp_10_daili:8,soil_temp_20:8,soil_temp_20_daili:8,soil_temp_50:8,soil_temp_50_daili:8,soil_temp_5:8,soil_temp_5_daili:8,soil_temperature_5:8,soilf:15,solar:[4,16],solar_radi:8,solarad:8,solarad_daili:8,solarad_flag:8,solarad_max:8,solarad_max_flag:8,solarad_min:8,solarad_min_flag:8,solut:4,some:[2,3,4,8,14,15,16,17],sometim:[2,4,16],soon:1,sort:14,sortbi:13,sourc:[0,1,4],south_centr:11,southeast:11,space:[1,10,18],spatial:[1,9,18],spatial_bias_scatt:9,spatial_scatt:9,spatial_stat_scatt:9,spec:[4,16],specfic:1,speci:[13,14],speciat:[4,16],speciepg:[4,16],specif:[4,14,16],specifi:[4,7,8,14],spectral:[4,16],speed:[1,4,16],squar:[10,14],sr_flag:8,srad:[4,16],sradcmap:9,srfacc:[3,13],srfatkn:[3,13],ssa:[4,16],st_flag:8,st_type:8,stabl:[14,15],stack:14,staff:9,standard:[4,8,9,10,14,16],start:[1,4,14,15,16],stat:[9,10],state:[4,8,9,11,13,14,15,16],state_cod:14,state_nam:[13,14,15],state_resolut:9,statement:[2,7],station:[4,16],statist:[1,14,18],statsmodel:14,std:[13,14],stddev:9,stdo:10,stdp:10,step:13,still:[3,13,17],stime:3,stop:[4,16],store:[3,7,15,17],str:8,string:[4,7,8],structur:[4,16],style:3,styren:14,sub_hourli:8,submodul:[0,5],subpackag:[0,5],subplot:[13,14],subplot_kw:13,subset:[13,14],subset_epa:11,subset_sit:8,suburban:14,suggest:[0,1],sum:[8,14],summari:[6,7,8,9,10,11,14],suppli:[4,11,16],support:2,suppos:13,sur_temp:8,sur_temp_daily_avg:8,sur_temp_daily_max:8,sur_temp_daily_min:8,sur_temp_daily_typ:8,sur_temp_flag:8,sur_temp_max:8,sur_temp_max_flag:8,sur_temp_min:8,sur_temp_min_flag:8,sur_temp_typ:8,surfac:[1,13],surface_temperatur:8,synerg:[4,16],system:[1,4,8,16],t12:3,t12z:[3,13,17],t13:3,t_calc:8,t_daily_avg:8,t_daily_max:8,t_daily_mean:8,t_daily_min:8,t_hr_avg:8,t_max:8,t_min:8,tab:[4,16],tabl:[8,14],tabular:18,take:14,taken:8,talk:14,tandfonlin:15,target:14,task:3,taylor:9,taylor_diagram_prim:9,taylordiagram:[5,6,11],temp2:13,temp:[4,13,16],tempcmap:9,temperatur:[4,14,16],term:[4,16],tert:14,test:[9,13],tetrachlorid:14,tetrachloroethan:14,tetrachloroethylen:14,text:[14,15],tflag:[3,13],than:[4,8,13,16],thei:[4,7,14,16],them:14,theta:9,thi:[1,2,3,4,8,11,13,14,15,16,17],thousand:[4,16],threashold:8,threat:10,three:[4,16],through:[4,15,16],thrown:7,tick:14,time:[1,3,4,8,9,10,11,13,14,15,16,18],time_loc:[13,14],timeseri:[1,9,11],timeseries_mb:11,timeseries_rms:11,tip:2,titl:[9,11],to_constant_latitud:[10,11],to_constant_longitud:10,to_csv:[13,14],to_index:13,to_panda:13,togeth:8,tolnet:[1,5,6],toluen:14,tool:[1,4,5,6,13,14,15,16,18],tot10:[4,16],tot15:[4,16],tot20:[4,16],total:[4,13,14,16],toxic:[4,16],track:8,train:4,traitement:[4,16],tran:14,transfer:[4,16],transform:[10,11,15],transport:1,trend:[1,12],triang:15,triangl:[4,16],tribal:[4,16],tribe_nam:14,trichloro:14,trichlorobenzen:14,trichloroethan:14,trichloroethylen:14,trichlorofluoromethan:14,trifluoroethan:14,trimethylbenzen:14,trimethylpentan:14,tstep:3,ttn:[4,16],ttnamti1:[4,16],tube:4,tue:14,turn:7,tutori:[1,4,14,15,16,17],two:[7,8,13,14],txt:15,type:[6,7,8,9,10,11,13,14],unc:15,undecan:14,under:15,uniform:4,uniqu:14,unit:[4,8,10,13,14,15,16],unit_id:8,unitid:8,univ:[4,16],univers:[4,16],unpair:10,unscreen:[4,16],unstack:[4,16],unverifi:14,upnam:3,urban:[4,14],url:[8,13],use:[2,3,4,8,13,14,15,16],used:[4,7,8,15,16,18],useful:[13,14,15],user:[2,4,13,14,15,16],user_global_n:14,user_n:14,uses:[4,13,16,18],using:[1,2,4,7,8,12,13,14,16,18],usingth:2,usual:15,usutp:10,usutpb:10,utc:14,utc_dat:8,utc_tim:8,utcoffset:13,utf:7,util:[3,4,5,6,13,14,15,16],valid:[4,8,16],valu:[4,8,10,13,14,15,16],valuabl:14,variabl:[3,4,7,8,11,13,14,15,16,17],varnam:[7,8],vector:8,vehicl:[4,16],verbos:[7,8],veri:[13,14,15],verif:[5,6,13],verifi:[5,6],version:[1,2,3,4,8,16],versu:[14,15],vglvl:3,vgtop:3,vgtyp:3,view:[0,1,3,8,12,14,15],vinyl:14,vista:[4,15,16],visual:1,vmax:[9,13],vmin:[9,13],voc:[4,8,14,16],vol:[4,16],volcan:[3,13,17],volcano:[1,12],volum:[4,16],wai:2,want:[4,13,14,15,16],warn:14,water:[4,16],watson:14,wbanno:8,wdac:10,wdate:3,wdioa:10,wdir10:13,wdir:[4,9,10,16],wdmb:10,wdmdnb:10,wdmdne:10,wdme:10,wdrmse:10,weather:1,web:[4,16],websit:15,weekli:[8,14,15],weight:[7,11],well:[1,4,16],wet:[4,8],wet_flag:8,wgs84:14,what:[8,13,14],when:[13,18],where:[3,4,8,13,14,15,16],which:[4,7,8,16],why:1,wide:[14,15],win_typ:15,wind:[4,10,16],wind_1_5:8,wind_barb:9,wind_flag:8,wind_quiv:9,window:[8,10],wisc:4,within:[1,8,15],without:[3,13],work:[1,18],would:[4,16],wrf:1,writ:[4,16],write_t:8,wscmap:9,wsdir2uv:10,wspd10:13,wtime:3,www3:[4,16],www:[4,8,9,14,15,16],x_scale:15,xarrai:[2,3,7,11,13],xarray_:18,xcell:3,xcent:3,xlabel:15,xo2n:[3,13],xorig:3,xxxxx:8,xxxxxx:8,xylen:14,ycell:3,ycent:3,year:[4,7,8,14,16],yearli:[4,16],yield:[8,13],ylabel:[9,14,15],yorig:3,you:[2,3,4,8,13,14,15,16],your:15,yyyi:[8,11],yyyymmdd:8,zerbenko:15,zero:[7,10],zip:[4,14,16]},titles:["Get in touch","Model and ObservatioN Evalatution Toolkit (MONET)","Installation","Models","Observations","monet","monet package","monet.models package","monet.obs package","monet.plots package","monet.util package","monet.verification package","Tutorial","How to Open and View CMAQ simulations - HI Volcano Example","How to read AQS data from PAMS and do a quick analysis","Loading IMPROVE Data","Loading Point Data","Opening Model Data","Overview: Why MONET?"],titleterms:{AQS:[4,14,16],For:2,aeronet:[4,8,16],airnow:[4,8,13,16],analysi:[14,15],aod:[4,16],api:0,aqs:8,avail:[4,16],basemodel:7,camx:[3,7,17],cem:[4,8,16],climat:[4,16],cluster:15,cmaq:[3,7,13,17],colorbar:9,combin:[10,11],comput:2,content:[6,7,8,9,10,11],contour:13,crn:8,daili:8,data:[8,14,15,16,17],databas:[4,16],dataset:1,depend:2,epa:[4,16],epa_util:8,evalatut:1,exampl:13,featur:18,find:13,from:14,galleri:18,get:[0,1],how:[13,14],hysplit:[3,7],improv:[4,8,15],instal:2,instruct:2,integr:[4,16],interp:10,interpol:11,invers:[4,16],ish:8,kmean:15,lat:13,learn:15,load:[4,15,16],lon:13,map:13,mapgen:9,mdn:4,measur:[4,16],model:[1,3,7,17],modul:[6,7,8,9,10,11],monet:[1,5,6,7,8,9,10,11,18],multipl:[4,16],mystat:10,nadp:[4,8,16],nearest:13,network:[4,16],ntn:4,obs:8,obsdata:11,observ:[1,4,13],open:[13,17],openaq:[4,16],overlai:13,overview:18,packag:[6,7,8,9,10,11],pair:13,pam:14,parallel:2,plot:[2,9,13,14],point:[13,16],product:[4,16],quick:14,read:14,refer:[1,4,16],requir:2,scikit:15,sda:[4,16],simul:13,specfic:[4,16],submodul:[6,7,8,9,10,11],subpackag:6,support:1,surfac:[4,16],taylordiagram:9,tolnet:8,tool:10,toolkit:1,touch:[0,1],trend:15,tutori:12,using:15,util:10,verif:11,verifi:11,view:13,volcano:13,why:18}})