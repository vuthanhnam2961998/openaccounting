/*Copyright (C) 2015  Sao Tien Phong (http://saotienphong.com.vn)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
var socaiSchema = new Schema({
	id_app:{type:String,required:true},
	ma_dvcs:{type:String,required:true},
	id_ct:{type:String,required:true},
	ma_ct:{type:String,required:true,uppercase:true},
	ma_gd:{type:String,default:'0'},
	ngay_ct:{type:Date,required:true},
	so_ct:{type:String,required:true,uppercase:true},
	
	tk_no:{type:String,required:true,uppercase:true},
	tk_co:{type:String,required:true,uppercase:true},
	
	ma_kh_no:{type:String,uppercase:true,default:''},
	ma_kh_co:{type:String,uppercase:true,default:''},
	
	ma_nt:{type:String,default:'VND',required:true,uppercase:true},
	ty_gia:{type:Number,default:1},
	
	tien_nt:{type:Number,default:0,required:true},
	tien:{type:Number,default:0,required:true},
	
	dien_giai:{type:String,default:''},
	
	ma_bp:{type:String,default:'',uppercase:true},
	ma_phi:{type:String,default:'',uppercase:true},
	ma_hd:{type:String,default:'',uppercase:true},
	ma_dt:{type:String,default:'',uppercase:true},
	ma_nv:{type:String,default:'',uppercase:true},
	ma_sp:{type:String,default:'',uppercase:true},
	
	status:{type:String,required:true},
	date_created:{type:Date,default:Date.now},
	date_updated:{type:Date,default:Date.now},
	user_created:{type:String,default:''},
	user_updated:{type:String,default:''}
});

socaiSchema.index({id_app:1,ma_dvcs:1,ngay_ct:1,tk_no:1,tk_co:1});
module.exports = mongoose.model('socai',socaiSchema);