'use client';
import React from 'react';
import { Menu, ChevronDown, Search, Star, Book, Award, Brain, Palette, Users, ExternalLink } from 'lucide-react';

interface CategoryCardProps {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
  gradient?: string;
}

// Sample data for heroes
const heroesData = [
  {
    id: 1,
    name: "جاویدنام مجیدرضا رهنورد ",
    code: "۱۲۳۴۵",
    description: "جاویدنام راه آزادی وطن که در جریان قیام ملی ۱۴۰۱ در شهر مشهد به دست نیروهای سرکوب گر بازداشت و ...",
    image: "/image/rahnavard_majidreza2022-1024x684.jpg"
  },
  {
    id: 2,
    name: " جاویدنام رحمت الله حسین زاده",
    code: "۶۷۸۹۰",
    description: "  سرتیپ خلبان  رحمت الله  حسین زاده  سورجانی از جان گذشتگان وطن در جنگ ۸ ساله عراق که در ...",
    image: "/image/qewerw.jpg"
  },
  {
    id: 3,
    name: "فاطمه سپهری ",
    code: "۱۱۲۲۳",
    description: "فاطمه سپهری بانوی ایرانی که در پی اعتراضات شجاعانه بر علیه ظلم سیستماتیک در ایران در تاریخ ...  ",
    image: "/image/01000000-0aff-0242-1723-08dbce56744d_w1200_r1.avif"
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-right font-[vazir]" dir="rtl">
      {/* Custom Vazir Font Import */}
      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css');
        
        * {
          font-family: 'Vazir', system-ui, -apple-system, sans-serif;
        }
      `}</style>

      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4 space-x-reverse">
              <span className="border-r border-blue-700 pr-4">پست الکترونیک: info@heroes.gov</span>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <a href="#" className="hover:text-blue-200">English</a>
              <a href="#" className="hover:text-blue-200">العربية</a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4 space-x-reverse">
              <img src="/image/شیر_و_خورشید_بدون_شمشیر (2).png" alt="نشان ملی" className="h-12 w-22" />
              <div>
                <span className="text-xl font-bold text-blue-950 block">پهلوانان ملی ایران</span>
                <span className="text-sm text-gray-600">پایگاه رسمی ثبت و گرامیداشت</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 space-x-reverse">
              <a href="#" className="text-gray-700 hover:text-blue-900">صفحه اصلی</a>
              <a href="#" className="text-gray-700 hover:text-blue-900">خدمات الکترونیک</a>
              <a href="#" className="text-gray-700 hover:text-blue-900">قوانین و مقررات</a>
              <a href="#" className="text-gray-700 hover:text-blue-900">درباره ما</a>
              <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors">
                ورود به سامانه
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              سامانه جامع پهلوانان ملی ایران
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              ثبت، نگهداری و پاسداشت میراث پهلوانی ایران زمین
            </p>
            <div className="flex justify-center">
              <div className="relative w-full max-w-2xl">
                <input
                  type="text"
                  placeholder="جستجوی پهلوانان ملی..."
                  className="w-full px-6 py-4 rounded-lg border-2 border-blue-700 bg-blue-800/50 text-white placeholder-blue-200 focus:outline-none focus:border-blue-600"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <QuickAccessButton
              title="ثبت پهلوان جدید"
              description="درخواست ثبت در فهرست ملی"
              icon={<Star className="h-6 w-6" />}
            />
            <QuickAccessButton
              title="استعلام وضعیت"
              description="پیگیری درخواست‌ها"
              icon={<Search className="h-6 w-6" />}
            />
            <QuickAccessButton
              title="دریافت گواهی"
              description="صدور گواهینامه رسمی"
              icon={<Award className="h-6 w-6" />}
            />
            <QuickAccessButton
              title="گزارش سالانه"
              description="آمار و ارقام رسمی"
              icon={<Book className="h-6 w-6" />}
            />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">دسته‌بندی پهلوانان ملی</h2>
            <a href="#" className="text-blue-900 hover:text-blue-700 flex items-center">
              مشاهده همه
              <ChevronDown className="h-4 w-4 mr-1 rotate-90" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CategoryCard 
              icon={<Star className="h-8 w-8" />}
              title="جاویدنامان جنگ"
              description=" پهلوانان ایثارگر در راه وطن در نبرد با عراق"
              gradient="bg-blue-50"
            />
            <CategoryCard 
              icon={<Award className="h-8 w-8" />}
              title="پهلوانان ورزشی"
              description="افتخارآفرینان میادین ملی ورزشی"
              gradient="bg-blue-50"
            />
            <CategoryCard 
              icon={<Brain className="h-8 w-8" />}
              title="نخبگان علمی"
              description="دانشمندان و پژوهشگران برجسته"
              gradient="bg-blue-50"
            />
          </div>
        </div>
      </div>

      {/* Featured Heroes Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">پهلوانان برگزیده ماه</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroesData.map((hero) => (
              <div key={hero.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={hero.image} 
                  alt={`تصویر ${hero.name}`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{hero.name}</h3>
                    <span className="text-sm text-blue-900">کد پهلوانی: {hero.code}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{hero.description}</p>
                  <a href="#" className="text-blue-900 hover:text-blue-700 text-sm flex items-center">
                    مشاهده پرونده کامل
                    <ExternalLink className="h-4 w-4 mr-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/image/شیر_و_خورشید_بدون_شمشیر (2).png" alt="نشان ملی" className="h-24 w-30 mb-4" />
              <p className="text-gray-400 text-sm">
                پایگاه رسمی ثبت و گرامیداشت پهلوانان ملی ایران
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">دسترسی سریع</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">صفحه اصلی</a></li>
                <li><a href="#" className="hover:text-white">خدمات الکترونیک</a></li>
                <li><a href="#" className="hover:text-white">قوانین و مقررات</a></li>
                <li><a href="#" className="hover:text-white">تماس با ما</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">اطلاعات تماس</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">نماد اعتماد</h3>
              <div className="flex space-x-4 space-x-reverse">
                <img src="/api/placeholder/80/80" alt="نماد اعتماد الکترونیکی" className="h-20 w-20" />
                <img src="/api/placeholder/80/80" alt="نشان ملی ثبت" className="h-20 w-20" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <p className="text-gray-500 text-sm text-center">
              کلیه حقوق این سامانه متعلق به سازمان ثبت پهلوانان ملی ایران می‌باشد. ©۱۴۰۳
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const CategoryCard = ({ icon, title, description, gradient = "bg-blue-50" }: CategoryCardProps) => {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
      <div className={`flex items-center justify-center w-16 h-16 ${gradient} rounded-full mb-4 mx-auto`}>
        {React.cloneElement(icon, { className: "text-blue-900" })}
      </div>
      <h3 className="text-xl font-bold text-center mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
};

interface QuickAccessButtonProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const QuickAccessButton = ({ title, description, icon }: QuickAccessButtonProps) => {
  return (
    <a href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900">
        {icon}
      </div>
      <div className="mr-4">
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </a>
  );
};

export default HomePage;